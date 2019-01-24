
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BeginUIUI extends View {
		public startButton:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Button","props":{"y":323,"x":478,"width":193,"var":"startButton","stateNum":1,"skin":"ui/startButton.png","mouseThrough":false,"mouseEnabled":true,"labelStroke":0,"labelSize":40,"height":185}},{"type":"Image","props":{"y":83,"x":356,"skin":"ui/title.png"}},{"type":"Text","props":{"y":618,"x":8,"width":162,"text":"Powered by LayaAir Engine","height":30,"fontSize":15}},{"type":"Text","props":{"y":599,"x":35,"width":162,"text":"北极猫工作室","height":30,"fontSize":15}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BeginUIUI.uiView);

        }

    }
}

module ui {
    export class GameUI extends View {
		public scoreLabel:laya.display.Text;
		public downButton:Laya.Image;
		public upButton:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Text","props":{"y":21,"x":438,"width":244,"text":"分数：","strokeColor":"#ffffff","stroke":6,"height":42,"fontSize":40,"color":"#ff3936","bold":true}},{"type":"Text","props":{"y":21,"x":556,"width":363,"var":"scoreLabel","text":"0","strokeColor":"#ffffff","stroke":6,"height":42,"fontSize":40,"color":"#ff3936","bold":true}},{"type":"Image","props":{"y":405,"x":22,"width":215,"var":"downButton","skin":"ui/downButton.png","height":215,"alpha":0.6}},{"type":"Image","props":{"y":408,"x":901,"width":215,"var":"upButton","skin":"ui/upButton.png","height":215,"alpha":0.6}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}

module ui {
    export class GameOverUI extends View {
		public ani1:Laya.FrameAnimation;
		public scoreLabel:laya.display.Text;
		public restartButton:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Sprite","props":{"y":331,"x":566,"width":406,"scaleY":1,"scaleX":1,"pivotY":170,"pivotX":200,"height":342},"compId":5,"child":[{"type":"Image","props":{"y":-18,"x":-29,"skin":"ui/GameOverPanel.png"}},{"type":"Text","props":{"y":150,"x":202,"width":162,"var":"scoreLabel","text":"1000","strokeColor":"#2a2a2a","stroke":4,"height":57,"fontSize":50,"color":"#bb2422","bold":true}},{"type":"Button","props":{"y":217,"x":51,"var":"restartButton","stateNum":1,"skin":"ui/Button.png","labelStrokeColor":"#712f2f","labelStroke":8,"labelSize":50,"labelColors":"#bb2422","labelBold":true,"label":"重    玩"}}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":30}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameOverUI.uiView);

        }

    }
}
