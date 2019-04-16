class Player extends Sprite{
    game:Game
    itemManager:ItemManager
    ani:Animation
    currentAnimation="" //当前播放的动画
    shieldAni:Animation
    magnentAni:Animation
    gravity=0.388
    hspeed=0
    vspeed=0
    runSpeed=8.33
    jumpSpeed=10
    
    
    isRun=false
    isFloor=false
    //实现提前几帧按下按键的效果
    lastPressedAction=""  //最后按下的动作
    lastPressedTimer=0
    lastPressedTime=0.15
    setLastPressed(action:string){
        this.lastPressedAction=action
        this.lastPressedTimer=this.lastPressedTime
    }
    //slide属性
    slide_timer=0
    slide_time=0.7
    //磁铁
    private _isMagnent=false
    set isMagnent(value){
        this._isMagnent=value
        if(this._isMagnent){
            this.magnent_timer=this.magnent_time
            this.magnentAni.visible=true
        }else{
            this.magnentAni.visible=false
        }
    }
    get isMagnent(){
        return this._isMagnent
    }
    magnent_timer=0
    magnent_time=8
    //护盾
    private _isShield=false
    set isShield(value){
        this._isShield=value
        if (this._isShield){
            this.shield_timer=this.shield_time
            this.shieldAni.visible=true
        }else{
            this.shieldAni.visible=false
        }
    }
    get isShield(){
        return this._isShield
    }
    shield_timer=0
    shield_time=8
    //状态
    private _state=""  //normal slide die
    set state(value){
        //退出事件
        switch (this.state){
            case "normal":

            break;
            case "slide":
            this.ani.y=-64
            break;

        }
            

        this._state=value
        //进入事件
        switch(this.state){
            case "normal":
                this.setBounds(new Rectangle(-28,-58,56,116))
            break;
            case "slide":
                this.setBounds(new Rectangle(-28,4,56,56))
                this.slide_timer=this.slide_time
                this.playAni("slide")
                this.ani.y=-64+13 //13是下滑时贴图向下偏移值
            break;
            case "die":
                if(this.isMagnent){
                    this.isMagnent=false
                }
                this.vspeed=-8
                this.playAni("jumpDown")
                this.isRun=false
                this.rotation=-45
                this.event("die") //发送死亡事件
            break;
        }
    }
    get state(){
        return this._state
    }

    //----------初始化------------
    constructor(){
        super()

        this.ani=new Animation()
        this.addChild(this.ani)
        this.ani.loadAnimation("PlayerAnimation.ani")
        this.ani.pos(-64,-64)
        this.playAni("idle")

        this.shieldAni=new Animation()
        this.addChild(this.shieldAni)
        this.shieldAni.loadAnimation("ShieldAnimation.ani")
        this.shieldAni.scale(2,2)
        this.shieldAni.pos(-64,-64)
        this.shieldAni.play(0,true,"ani1")
        this.shieldAni.visible=false

        this.magnentAni=new Animation()
        this.addChild(this.magnentAni)
        this.magnentAni.loadAnimation("MagnentAnimation.ani")
        this.magnentAni.alpha=0.7
        this.magnentAni.pos(-32,-106)
        this.magnentAni.play(0,true,"ani1")
        this.magnentAni.visible=false

    }
    start(game:Game){
        this.game=game
        this.itemManager=game.itemManager
        this.state="normal"

        //Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown)
        //Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN,this,this.onRightMouseDown)
        $game.gameUI.downButton.on(Laya.Event.MOUSE_DOWN,this,this.onRightMouseDown)
        $game.gameUI.upButton.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown)
        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onkeyDown);
    }

//---------------------------
    update(){
        


        this.hspeed=0
        //重力加速度
        this.vspeed+=this.gravity

        //逻辑
        switch(this.state){
            case "normal":
                if(this.isFloor && this.lastPressedAction=="jump"){
                    this.vspeed=-this.jumpSpeed
                    this.lastPressedAction=""
                }
                if(this.isFloor && this.lastPressedAction=="down"){
                    this.state="slide"
                    this.lastPressedAction=""
                }
            break;
            case "slide":
                this.slide_timer-=1/60
                if (this.slide_timer<=0){
                    this.state="normal"
                }
                if(this.isFloor && this.lastPressedAction=="jump"){
                    this.vspeed=-this.jumpSpeed
                    this.state="normal"
                }
            break;
            case "die":
                this.hspeed=-3
            break;
        }
        //物理
        if (this.isRun){
            this.hspeed=this.runSpeed
        }
        this.x+=this.hspeed
        if (this.vspeed>10){
            this.vspeed=10
        }
        //碰撞
        if (this.state!="die"){
            this.collision()
        }
        this.y+=this.vspeed


        //动画
        var nextAnima=""
        if(this.state=="normal"){
            if (this.isFloor){
                if(this.hspeed!=0){
                    nextAnima="run"
                }else{
                    nextAnima="idle"
                }
            }else{
                if(this.vspeed<0){
                    nextAnima="jumpUp"
                }else{
                    nextAnima="jumpDown"
                }
            }
        }
        if(nextAnima!="" && nextAnima!=this.currentAnimation){
            this.playAni(nextAnima)
        }
        //掉落死亡
        if (this.state!="die"){
            if(this.y>850){
                this.state="die"
            }
        }
        //更新磁铁计时
        if(this.isMagnent){
            this.magnent_timer-=1/60
            if(this.magnent_timer<=0){
                this.isMagnent=false
            }
        }
        //更新盾牌计时
        if(this.isShield){
            this.shield_timer-=1/60
            if(this.shield_timer<=0){
                this.isShield=false
            }
        }





        //更新最后按下按键
        if(this.lastPressedAction!=""){
            this.lastPressedTimer-=1/60
            if(this.lastPressedTimer<=0){
                this.lastPressedAction=""
            }
        }
    }
    
    collision(){
           //和地面碰撞
        this.isFloor=false

        if(this.vspeed>=0){
            var rec=new Rectangle()
            rec.x=this.x-32
            rec.width=64
            rec.y=this.y+this.vspeed+64-2-4  //2是rec宽度  4脚的位置和贴图底部的偏移
            rec.height=2
            for (let i=0;i<this.itemManager.floorList.length;i++){
                var fl=this.itemManager.floorList[i] as Floor
                if(fl.getBounds().intersection(rec)){
                    //碰到了
                    this.isFloor=true
                    this.vspeed=0
                    this.y=fl.getBounds().y-64+4  //4脚的位置和贴图底部的偏移
                    break
                }
            }
        }
        
        
        //和吃的东西的碰撞
        rec=this.getBounds() //接下来用碰撞框来检测

        for(let i=0;i<this.itemManager.eatItemList.length;i++){
            let item=this.itemManager.eatItemList[i] as EatItem
            if(item.getBounds().intersection(rec)){
                //吃到了
                item.eat()
            }
        }
        //和敌人的碰撞
        if(!this.isShield){
            for(let i=0;i<this.itemManager.enemyList.length;i++){
                let item=this.itemManager.enemyList[i] as Enemy
                if(item.getBounds().intersection(rec)){
                    //碰到了
                    this.state="die"
                }
            }
        }
        
        
    }


//--------------功能---------
    playAni(anima:string){
        this.currentAnimation=anima
        this.ani.play(0,true,anima)
    }
//--------------回调----------
    onMouseDown(){
        if(this.isRun){
            this.setLastPressed("jump")
        }
        
    }
    onRightMouseDown(){
        if(this.isRun){
            this.setLastPressed("down")
        }
        
    }
    onkeyDown(e){
        if(e.keyCode==38){
            this.setLastPressed("jump")
        }
        if(e.keyCode==40){
            this.setLastPressed("down")
        }
    }




}


