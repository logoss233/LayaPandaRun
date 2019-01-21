class Stab extends Enemy{
    constructor(){
        super()
        this.poolTag="Stab"
        this.loadImage("item/Spike.png")
        this.setBounds(new Rectangle(3,3,58,60))
    }

}