var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    //----------初始化------------
    function Player() {
        var _this = _super.call(this) || this;
        _this.currentAnimation = ""; //当前播放的动画
        _this.gravity = 0.388;
        _this.hspeed = 0;
        _this.vspeed = 0;
        _this.runSpeed = 8.33;
        _this.jumpSpeed = 10;
        _this.isRun = false;
        _this.isFloor = false;
        //实现提前几帧按下按键的效果
        _this.lastPressedAction = ""; //最后按下的动作
        _this.lastPressedTimer = 0;
        _this.lastPressedTime = 0.15;
        //slide属性
        _this.slide_timer = 0;
        _this.slide_time = 0.7;
        //磁铁
        _this._isMagnent = false;
        _this.magnent_timer = 0;
        _this.magnent_time = 8;
        //护盾
        _this._isShield = false;
        _this.shield_timer = 0;
        _this.shield_time = 8;
        //状态
        _this._state = ""; //normal slide die
        _this.ani = new Animation();
        _this.addChild(_this.ani);
        _this.ani.loadAnimation("PlayerAnimation.ani");
        _this.ani.pos(-64, -64);
        _this.playAni("idle");
        _this.shieldAni = new Animation();
        _this.addChild(_this.shieldAni);
        _this.shieldAni.loadAnimation("ShieldAnimation.ani");
        _this.shieldAni.scale(2, 2);
        _this.shieldAni.pos(-64, -64);
        _this.shieldAni.play(0, true, "ani1");
        _this.shieldAni.visible = false;
        _this.magnentAni = new Animation();
        _this.addChild(_this.magnentAni);
        _this.magnentAni.loadAnimation("MagnentAnimation.ani");
        _this.magnentAni.alpha = 0.7;
        _this.magnentAni.pos(-32, -106);
        _this.magnentAni.play(0, true, "ani1");
        _this.magnentAni.visible = false;
        return _this;
    }
    Player.prototype.setLastPressed = function (action) {
        this.lastPressedAction = action;
        this.lastPressedTimer = this.lastPressedTime;
    };
    Object.defineProperty(Player.prototype, "isMagnent", {
        get: function () {
            return this._isMagnent;
        },
        set: function (value) {
            this._isMagnent = value;
            if (this._isMagnent) {
                this.magnent_timer = this.magnent_time;
                this.magnentAni.visible = true;
            }
            else {
                this.magnentAni.visible = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "isShield", {
        get: function () {
            return this._isShield;
        },
        set: function (value) {
            this._isShield = value;
            if (this._isShield) {
                this.shield_timer = this.shield_time;
                this.shieldAni.visible = true;
            }
            else {
                this.shieldAni.visible = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            //退出事件
            switch (this.state) {
                case "normal":
                    break;
                case "slide":
                    this.ani.y = -64;
                    break;
            }
            this._state = value;
            //进入事件
            switch (this.state) {
                case "normal":
                    this.setBounds(new Rectangle(-28, -58, 56, 116));
                    break;
                case "slide":
                    this.setBounds(new Rectangle(-28, 4, 56, 56));
                    this.slide_timer = this.slide_time;
                    this.playAni("slide");
                    this.ani.y = -64 + 13; //13是下滑时贴图向下偏移值
                    break;
                case "die":
                    if (this.isMagnent) {
                        this.isMagnent = false;
                    }
                    this.vspeed = -8;
                    this.playAni("jumpDown");
                    this.isRun = false;
                    this.rotation = -45;
                    this.event("die"); //发送死亡事件
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.start = function (game) {
        this.game = game;
        this.itemManager = game.itemManager;
        this.state = "normal";
        //Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown)
        //Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN,this,this.onRightMouseDown)
        $game.gameUI.downButton.on(Laya.Event.MOUSE_DOWN, this, this.onRightMouseDown);
        $game.gameUI.upButton.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    };
    //---------------------------
    Player.prototype.update = function () {
        this.hspeed = 0;
        //重力加速度
        this.vspeed += this.gravity;
        //逻辑
        switch (this.state) {
            case "normal":
                if (this.isFloor && this.lastPressedAction == "jump") {
                    this.vspeed = -this.jumpSpeed;
                    this.lastPressedAction = "";
                }
                if (this.isFloor && this.lastPressedAction == "down") {
                    this.state = "slide";
                    this.lastPressedAction = "";
                }
                break;
            case "slide":
                this.slide_timer -= 1 / 60;
                if (this.slide_timer <= 0) {
                    this.state = "normal";
                }
                if (this.isFloor && this.lastPressedAction == "jump") {
                    this.vspeed = -this.jumpSpeed;
                    this.state = "normal";
                }
                break;
            case "die":
                this.hspeed = -3;
                break;
        }
        //物理
        if (this.isRun) {
            this.hspeed = this.runSpeed;
        }
        this.x += this.hspeed;
        if (this.vspeed > 10) {
            this.vspeed = 10;
        }
        //碰撞
        if (this.state != "die") {
            this.collision();
        }
        this.y += this.vspeed;
        //动画
        var nextAnima = "";
        if (this.state == "normal") {
            if (this.isFloor) {
                if (this.hspeed != 0) {
                    nextAnima = "run";
                }
                else {
                    nextAnima = "idle";
                }
            }
            else {
                if (this.vspeed < 0) {
                    nextAnima = "jumpUp";
                }
                else {
                    nextAnima = "jumpDown";
                }
            }
        }
        if (nextAnima != "" && nextAnima != this.currentAnimation) {
            this.playAni(nextAnima);
        }
        //掉落死亡
        if (this.state != "die") {
            if (this.y > 850) {
                this.state = "die";
            }
        }
        //更新磁铁计时
        if (this.isMagnent) {
            this.magnent_timer -= 1 / 60;
            if (this.magnent_timer <= 0) {
                this.isMagnent = false;
            }
        }
        //更新盾牌计时
        if (this.isShield) {
            this.shield_timer -= 1 / 60;
            if (this.shield_timer <= 0) {
                this.isShield = false;
            }
        }
        //更新最后按下按键
        if (this.lastPressedAction != "") {
            this.lastPressedTimer -= 1 / 60;
            if (this.lastPressedTimer <= 0) {
                this.lastPressedAction = "";
            }
        }
    };
    Player.prototype.collision = function () {
        //和地面碰撞
        this.isFloor = false;
        if (this.vspeed >= 0) {
            var rec = new Rectangle();
            rec.x = this.x - 32;
            rec.width = 64;
            rec.y = this.y + this.vspeed + 64 - 2 - 4; //2是rec宽度  4脚的位置和贴图底部的偏移
            rec.height = 2;
            for (var i = 0; i < this.itemManager.floorList.length; i++) {
                var fl = this.itemManager.floorList[i];
                if (fl.getBounds().intersection(rec)) {
                    //碰到了
                    this.isFloor = true;
                    this.vspeed = 0;
                    this.y = fl.getBounds().y - 64 + 4; //4脚的位置和贴图底部的偏移
                    break;
                }
            }
        }
        //和吃的东西的碰撞
        rec = this.getBounds(); //接下来用碰撞框来检测
        for (var i = 0; i < this.itemManager.eatItemList.length; i++) {
            var item = this.itemManager.eatItemList[i];
            if (item.getBounds().intersection(rec)) {
                //吃到了
                item.eat();
            }
        }
        //和敌人的碰撞
        if (!this.isShield) {
            for (var i = 0; i < this.itemManager.enemyList.length; i++) {
                var item = this.itemManager.enemyList[i];
                if (item.getBounds().intersection(rec)) {
                    //碰到了
                    this.state = "die";
                }
            }
        }
    };
    //--------------功能---------
    Player.prototype.playAni = function (anima) {
        this.currentAnimation = anima;
        this.ani.play(0, true, anima);
    };
    //--------------回调----------
    Player.prototype.onMouseDown = function () {
        if (this.isRun) {
            this.setLastPressed("jump");
        }
    };
    Player.prototype.onRightMouseDown = function () {
        if (this.isRun) {
            this.setLastPressed("down");
        }
    };
    return Player;
}(Sprite));
//# sourceMappingURL=Player.js.map