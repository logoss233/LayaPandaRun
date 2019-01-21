class BG extends Sprite{
    spr1:Sprite
    spr2:Sprite
    
    sprWidth=Cof.DesinWidth
    constructor(){
        super()
        this.spr1=new Sprite()
        this.spr1.loadImage("BG.jpg")
        this.addChild(this.spr1)
        this.spr2=new Sprite()
        this.spr2.loadImage("BG.jpg")
        this.addChild(this.spr2)
        this.spr2.pos(this.sprWidth,0)
    }
    update(camX){
        if((this.spr1.x+this.sprWidth)<camX){
            this.spr1.x=this.spr2.x+this.sprWidth
        }
        if((this.spr2.x+this.sprWidth)<camX){
            this.spr2.x=this.spr1.x+this.sprWidth
        }
    }
}