class Ball2 extends Enemy{
    constructor(){
        super()
        this.poolTag="Ball2"
        this.loadImage("item/metal-ball-2.png")
        this.setBounds(new Rectangle(7,7,50,50))
    }
}