
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BeginUIUI extends View {
		public startButton:Laya.Button;
		public rankButton:Laya.Button;
		public shareButton:Laya.Button;
		public starGame:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Button","props":{"y":237,"x":479,"width":193,"var":"startButton","stateNum":1,"skin":"ui/startButton.png","mouseThrough":false,"mouseEnabled":true,"labelStroke":0,"labelSize":40,"height":185}},{"type":"Image","props":{"y":83,"x":356,"skin":"ui/title.png"}},{"type":"Button","props":{"y":552,"x":946,"width":231,"var":"rankButton","stateNum":1,"skin":"ui/Button.png","pivotY":42,"pivotX":71,"labelSize":45,"label":"排行榜","height":89}},{"type":"Button","props":{"y":548,"x":103,"width":231,"var":"shareButton","stateNum":1,"skin":"ui/Button.png","pivotY":42,"pivotX":71,"labelSize":45,"label":"分享好友","height":89}},{"type":"Text","props":{"y":7,"x":12,"text":"Powered by LayaAir Engine","strokeColor":"#ffffff","stroke":2,"fontSize":18,"font":"Arial","color":"#000000","bold":true}},{"type":"Sprite","props":{"y":33,"x":19,"width":158,"var":"starGame","height":144},"child":[{"type":"AdvImage","props":{"y":16,"x":20,"iconSign":"ADSprite"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("AdvImage",laya.ui.AdvImage);

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
		public shareButton:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Sprite","props":{"y":255,"x":576,"width":406,"scaleY":1,"scaleX":1,"pivotY":170,"pivotX":200,"height":342},"compId":5,"child":[{"type":"Image","props":{"y":-18,"x":-29,"skin":"ui/GameOverPanel.png"}},{"type":"Text","props":{"y":150,"x":202,"width":162,"var":"scoreLabel","text":"1000","strokeColor":"#2a2a2a","stroke":4,"height":57,"fontSize":50,"color":"#bb2422","bold":true}},{"type":"Button","props":{"y":220,"x":203,"width":228,"var":"restartButton","stateNum":1,"skin":"ui/Button.png","labelStrokeColor":"#712f2f","labelStroke":8,"labelSize":45,"labelColors":"#bb2422","labelBold":true,"label":"重    玩","height":106}},{"type":"Button","props":{"y":240,"x":-2,"width":226,"var":"shareButton","stateNum":1,"skin":"ui/Button.png","pivotY":21,"pivotX":21,"labelStrokeColor":"#712f2f","labelStroke":8,"labelSize":45,"labelColors":"#bb2422","labelBold":true,"label":"分    享","height":105}}]}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":30}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.GameOverUI.uiView);

        }

    }
}

module ui {
    export class rankViewUI extends View {
		public openSpr:Laya.Sprite;
		public backButton:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Image","props":{"y":-45,"x":-43,"width":1226,"skin":"comp/blank.png","height":752}},{"type":"Sprite","props":{"var":"openSpr"}},{"type":"Button","props":{"y":474,"x":857,"width":255,"var":"backButton","stateNum":1,"skin":"ui/Button.png","pivotY":-15,"pivotX":-8,"labelSize":50,"label":"返回","height":111}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.rankViewUI.uiView);

        }

    }
}
