class Ball1 extends Enemy{
    constructor(){
        super()
        this.poolTag="Ball1"
        this.loadImage("item/metal-ball-1.png")
        this.setBounds(new Rectangle(7,7,50,50))
    }
}