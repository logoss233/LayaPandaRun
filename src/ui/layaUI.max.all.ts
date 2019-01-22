
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BeginUIUI extends View {
		public startButton:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1136,"height":640},"child":[{"type":"Button","props":{"y":373,"x":380,"width":338,"var":"startButton","skin":"comp/button.png","mouseThrough":false,"mouseEnabled":true,"labelStroke":0,"labelSize":40,"label":"开始游戏","height":89}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BeginUIUI.uiView);

        }

    }
}
