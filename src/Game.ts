var $game:Game
    
class Game extends Sprite{
    distance=0
    
    itemManager:ItemManager
    cam:Cam
    player:Player

    camLayer:Sprite
    uiLayer:Sprite
    bg:BG
    itemPlace:Sprite
    
    



    //----------初始化---------
    constructor(){
        super()
        $game=this
        this.camLayer=new Sprite()
        this.addChild(this.camLayer)
        this.uiLayer=new Sprite()
        this.addChild(this.uiLayer)
        this.bg=new BG()
        this.camLayer.addChild(this.bg)
        this.itemPlace=new Sprite()
        this.camLayer.addChild(this.itemPlace)
        this.itemManager=new ItemManager()
        this.itemManager.start(this)

        this.player=new Player()
        this.camLayer.addChild(this.player)
        this.player.pos(200,300)
        this.player.start(this)

        this.cam=new Cam()
        this.cam.start(this.camLayer,this.player,this)

        

        Laya.timer.frameLoop(1,this,this.update)




        //test
        for(let i=1;i<=8;i++){
            var fl=new Floor()
            fl.start(i)
            fl.pos(i*64,400)
            this.itemManager.append(fl)
        }
        var magnent=Pool.getItemByClass("Magnent",Magnent)
        this.itemManager.append(magnent)


    }
    start(){
        
    }
    update(){
        this.player.update()
    }




    

}