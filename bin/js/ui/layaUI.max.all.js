var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BeginUIUI = /** @class */ (function (_super) {
        __extends(BeginUIUI, _super);
        function BeginUIUI() {
            return _super.call(this) || this;
        }
        BeginUIUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BeginUIUI.uiView);
        };
        BeginUIUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Button", "props": { "y": 319, "x": 484, "width": 193, "var": "startButton", "stateNum": 1, "skin": "ui/startButton.png", "mouseThrough": false, "mouseEnabled": true, "labelStroke": 0, "labelSize": 40, "height": 185 } }, { "type": "Image", "props": { "y": 83, "x": 356, "skin": "ui/title.png" } }, { "type": "Button", "props": { "y": 552, "x": 946, "width": 231, "var": "rankButton", "stateNum": 1, "skin": "ui/Button.png", "pivotY": 42, "pivotX": 71, "labelSize": 45, "label": "排行榜", "height": 89 } }] };
        return BeginUIUI;
    }(View));
    ui.BeginUIUI = BeginUIUI;
})(ui || (ui = {}));
(function (ui) {
    var GameUI = /** @class */ (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        GameUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Text", "props": { "y": 21, "x": 438, "width": 244, "text": "分数：", "strokeColor": "#ffffff", "stroke": 6, "height": 42, "fontSize": 40, "color": "#ff3936", "bold": true } }, { "type": "Text", "props": { "y": 21, "x": 556, "width": 363, "var": "scoreLabel", "text": "0", "strokeColor": "#ffffff", "stroke": 6, "height": 42, "fontSize": 40, "color": "#ff3936", "bold": true } }, { "type": "Image", "props": { "y": 405, "x": 22, "width": 215, "var": "downButton", "skin": "ui/downButton.png", "height": 215, "alpha": 0.6 } }, { "type": "Image", "props": { "y": 408, "x": 901, "width": 215, "var": "upButton", "skin": "ui/upButton.png", "height": 215, "alpha": 0.6 } }] };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
})(ui || (ui = {}));
(function (ui) {
    var GameOverUI = /** @class */ (function (_super) {
        __extends(GameOverUI, _super);
        function GameOverUI() {
            return _super.call(this) || this;
        }
        GameOverUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameOverUI.uiView);
        };
        GameOverUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Sprite", "props": { "y": 331, "x": 566, "width": 406, "scaleY": 1, "scaleX": 1, "pivotY": 170, "pivotX": 200, "height": 342 }, "compId": 5, "child": [{ "type": "Image", "props": { "y": -18, "x": -29, "skin": "ui/GameOverPanel.png" } }, { "type": "Text", "props": { "y": 150, "x": 202, "width": 162, "var": "scoreLabel", "text": "1000", "strokeColor": "#2a2a2a", "stroke": 4, "height": 57, "fontSize": 50, "color": "#bb2422", "bold": true } }, { "type": "Button", "props": { "y": 217, "x": 51, "var": "restartButton", "stateNum": 1, "skin": "ui/Button.png", "labelStrokeColor": "#712f2f", "labelStroke": 8, "labelSize": 50, "labelColors": "#bb2422", "labelBold": true, "label": "重    玩" } }] }], "animations": [{ "nodes": [{ "target": 5, "keyframes": { "scaleY": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleY", "index": 30 }], "scaleX": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 5, "key": "scaleX", "index": 30 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
        return GameOverUI;
    }(View));
    ui.GameOverUI = GameOverUI;
})(ui || (ui = {}));
(function (ui) {
    var rankViewUI = /** @class */ (function (_super) {
        __extends(rankViewUI, _super);
        function rankViewUI() {
            return _super.call(this) || this;
        }
        rankViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.rankViewUI.uiView);
        };
        rankViewUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Image", "props": { "y": -45, "x": -43, "width": 1226, "skin": "comp/blank.png", "height": 752 } }, { "type": "Sprite", "props": { "var": "openSpr" } }, { "type": "Button", "props": { "y": 474, "x": 857, "width": 255, "var": "backButton", "stateNum": 1, "skin": "ui/Button.png", "pivotY": -15, "pivotX": -8, "labelSize": 50, "label": "返回", "height": 111 } }] };
        return rankViewUI;
    }(View));
    ui.rankViewUI = rankViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map