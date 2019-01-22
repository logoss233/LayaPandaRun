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
        BeginUIUI.uiView = { "type": "View", "props": { "width": 1136, "height": 640 }, "child": [{ "type": "Button", "props": { "y": 373, "x": 380, "width": 338, "var": "startButton", "skin": "comp/button.png", "mouseThrough": false, "mouseEnabled": true, "labelStroke": 0, "labelSize": 40, "label": "开始游戏", "height": 89 } }] };
        return BeginUIUI;
    }(View));
    ui.BeginUIUI = BeginUIUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map