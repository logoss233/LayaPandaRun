var $game: Game


class Game extends Sprite {
    //分数
    private _score = 0
    get score() {
        return this._score
    }
    set score(value) {
        this._score = value
        if (this.gameUI != null) {
            this.gameUI.scoreLabel.text = String(value)
        }
    }
    //金币
    private _coin = 0
    get coin() {
        return this._coin
    }
    set coin(value) {
        this._coin = value
        this.updateScore()
    }
    //距离
    private _distance = 0
    get distance() {
        return this._distance
    }
    set distance(value) {
        this._distance = value
        //this.updateScore()
    }
    //重新计算分数
    updateScore() {
        this.score = this.coin * 10
    }



    floorRight = 0 //地板最右的位置
    last_mapData = null //防止重复场景用
    levelChangeDistance = 1000



    //--------
    itemManager: ItemManager
    cam: Cam
    player: Player

    camLayer: Sprite
    uiLayer: Sprite
    bg: BG
    itemPlace: Sprite

    tileParser: TileParser

    beginUI: ui.BeginUIUI //开始菜单
    gameUI: ui.GameUI
    gameOverUI: ui.GameOverUI
    //------------状态
    private _state = ""
    get state() {
        return this._state
    }
    set state(value) {
        this._state = value

    }


    //----------初始化---------
    constructor() {
        super()

        $game = this
        this.camLayer = new Sprite()
        this.addChild(this.camLayer)
        this.uiLayer = new Sprite()
        this.addChild(this.uiLayer)
        this.bg = new BG()
        this.camLayer.addChild(this.bg)
        this.itemPlace = new Sprite()
        this.camLayer.addChild(this.itemPlace)
        this.itemManager = new ItemManager()
        this.itemManager.start(this)

        this.player = new Player()
        this.camLayer.addChild(this.player)
        this.player.pos(350, 400)

        this.player.on("die", this, this.onDie)

        this.cam = new Cam()
        this.cam.start(this.camLayer, this.player, this)

        this.tileParser = new TileParser()
        this.tileParser.start(this.itemPlace)


        this.createFloor(0)




        Laya.timer.frameLoop(1, this, this.update)

        //this.player.isRun=true
        this.beginUI = new ui.BeginUIUI()
        this.addChild(this.beginUI)
        this.beginUI.startButton.on(Laya.Event.CLICK, this, this.onBeginGame)
        this.beginUI.rankButton.on(Laya.Event.CLICK, this, this.onOpenRank)
        this.beginUI.shareButton.on(Laya.Event.CLICK, this, this.share)
        //星星广告显示或隐藏
        if (Laya.Browser.onIOS){
            this.beginUI.starGame.visible=false
        }        

        this.gameUI = new ui.GameUI()
        this.addChild(this.gameUI)
        this.gameUI.visible = false

        this.gameOverUI = new ui.GameOverUI()
        this.addChild(this.gameOverUI)
        this.gameOverUI.visible = false
        this.gameOverUI.restartButton.on(Laya.Event.CLICK, this, this.onRestart)


        this.player.start(this)

        //展现广告
        $bannerManager.show()
    }
    start() {

    }
    update() {
        this.player.update()
        this.cam.update()
        this.bg.update(this.cam.camX)
        this.itemManager.update(this.cam.camX)

        //自动创建地图
        var camRight = this.cam.camX + Cof.DesinWidth
        if (camRight > this.floorRight - 100) {
            var level = Math.floor(this.distance / this.levelChangeDistance) + 1
            var lv = this.chooseLv(level)
            this.createFloor(lv)
        }
    }

    //---------功能
    createFloor(lv) {
        console.log("createFloor:", lv)
        if (lv > $data.mapLab.length - 1) {
            lv = $data.mapLab.length - 1
        }
        var mapList = $data.mapLab[lv]

        var index = Math.floor(Math.random() * mapList.length)
        var mapData = mapList[index]
        if (this.last_mapData == mapData) {
            index = Math.floor(Math.random() * mapList.length)
            mapData = mapList[index]
        }
        this.last_mapData = mapData

        var jsonObj = Laya.loader.getRes(mapData)
        this.floorRight = this.tileParser.parse(jsonObj, this.floorRight)
    }
    chooseLv(level) {
        var lv = 0
        var r = Math.random()
        if (level == 1) {
            if (r < 0.7) {
                lv = 1
            } else {
                lv = 2
            }
        }
        else if (level == 2) {
            if (r < 0.4) {
                lv = 1
            } else if (r < 0.8) {
                lv = 2
            } else {
                lv = 3
            }
        }
        else if (level == 3) {
            if (r < 0.2) {
                lv = 1
            } else if (r < 0.6) {
                lv = 2
            } else {
                lv = 3
            }
        }
        else if (level == 4) {
            if (r < 0.1) {
                lv = 1
            } else if (r < 0.5) {
                lv = 2
            } else {
                lv = 3
            }
        }
        else if (level == 5) {
            if (r < 0.4) {
                lv = 2
            } else {
                lv = 3
            }
        }
        else if (level == 6) {
            if (r < 0.3) {
                lv = 2
            } else if (r < 0.8) {
                lv = 3
            } else {
                lv = 4
            }
        }
        else if (level == 7) {
            if (r < 0.2) {
                lv = 2
            } else if (r < 0.6) {
                lv = 3
            } else {
                lv = 4
            }
        }
        else if (level == 8) {
            if (r < 0.4) {
                lv = 3
            } else {
                lv = 4
            }
        }
        else if (level == 9) {
            if (r < 0.3) {
                lv = 3
            } else {
                lv = 4
            }
        }
        else if (level == 10) {
            if (r < 0.2) {
                lv = 3
            } else {
                lv = 4
            }
        } else {
            lv = 4
        }
        return lv
    }


    onBeginGame() {
        this.beginUI.visible = false
        this.player.isRun = true
        $musicManager.begin()
        this.gameUI.visible = true

        //广告关闭
        $bannerManager.hide()
        $bannerManager.changeBanner()
    }
    onDie() {
        $musicManager.end()
        //隐藏gameUI
        this.gameUI.visible = false
        //显示gameoverUI
        this.gameOverUI.visible = true
        this.gameOverUI.ani1.play(0, false)
        this.gameOverUI.scoreLabel.text = String(this.score)
        //设置分数
        $openView.setScore(this.score)

        //广告显示
        $bannerManager.show()

    }
    onRestart() {
        //移除所有物体
        var list = this.itemManager.itemList
        for (let i = 0; i < list.length; i++) {
            var item = list[i]
            this.itemManager.remove(item)
            this.event("restart")
        }
    }
    onOpenRank() {
        $openView.openRank()
        //打开广告
        $bannerManager.hide()
    }
    share() {
        if (Laya.Browser.onMiniGame){
            let wx = Laya.Browser.window.wx
            wx.shareAppMessage({
                title: '快来一起跑酷吧'
            })
        }
    }
}