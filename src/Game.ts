var $game:Game
    
class Game extends Sprite{
    distance=0
    
    floorRight=0 //地板最右的位置
    last_mapData=null //防止重复场景用
    levelChangeDistance=1000 




    //--------
    itemManager:ItemManager
    cam:Cam
    player:Player

    camLayer:Sprite
    uiLayer:Sprite
    bg:BG
    itemPlace:Sprite
    
    tileParser:TileParser
    




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

        this.tileParser=new TileParser()
        this.tileParser.start(this.itemPlace)


        this.createFloor(0)




        Laya.timer.frameLoop(1,this,this.update)

        this.player.isRun=true
    }
    start(){
        
    }
    update(){
        this.player.update()
        this.cam.update()
        this.bg.update(this.cam.camX)
        this.itemManager.update(this.cam.camX)
    }

    //---------功能
    createFloor(lv){
        console.log("createFloor:",lv)
        if(lv>$data.mapLab.length-1){
            lv=$data.mapLab.length-1
        }
        var mapList=$data.mapLab[lv]

        var index=Math.floor(Math.random()*mapList.length)
        var mapData=mapList[index]
        if(this.last_mapData==mapData){
            index=Math.floor(Math.random()*mapList.length)
            mapData=mapList[index]
        }
        this.last_mapData=mapData

        var jsonObj=Laya.loader.getRes(mapData)
        this.floorRight=this.tileParser.parse(jsonObj,this.floorRight)
    }
    chooseLv(level){
        var lv=0
        var r=Math.random()
        if(level==1){
            if(r<0.7){
                lv=1
            }else{
                lv=2
            }
        }
        else if(level==2){
            if(r<0.4){
                lv=1
            }else if(r<0.8){
                lv=2
            }else{
                lv=3
            }
        }
        else if(level==3){
            if(r<0.2){
                lv=1
            }else if(r<0.6){
                lv=2
            }else{
                lv=3
            }
        }
        else if(level==4){
            if(r<0.1){
                lv=1
            }else if(r<0.5){
                lv=2
            }else{
                lv=3
            }
        }
        else if(level==5){
            if(r<0.4){
                lv=2
            }else{
                lv=3
            }
        }
        else if(level==6){
            if(r<0.3){
                lv=2
            }else if(r<0.8){
                lv=3
            }else{
                lv=4
            }
        }
        else if(level==7){
            if(r<0.2){
                lv=2
            }else if(r<0.6){
                lv=3
            }else{
                lv=4
            }
        }
        else if(level==8){
            if(r<0.4){
                lv=3
            }else{
                lv=4
            }
        }
        else if(level==9){
            if(r<0.3){
                lv=3
            }else{
                lv=4
            }
        }
        else if(level==10){
            if(r<0.2){
                lv=3
            }else{
                lv=4
            }
        }else{
            lv=4
        }
        return lv
    }


    

}