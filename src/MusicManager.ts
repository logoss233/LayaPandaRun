var $musicManager:MusicManager

class MusicManager{
    loopStart="res/sound/loopStart.mp3"
    loopEnd="res/sound/loopEnd.mp3"
    loopList=[]
    currentMusic=""
    constructor(){
        $musicManager=this

        this.loopList=[
            "res/sound/loop1.mp3",
            "res/sound/loop2.mp3",
            "res/sound/loop3.mp3",
        ]
    }

    play(music:string){
        this.currentMusic=music
        SoundManager.playMusic(music,1,new Handler(this,this.onMusicFinished))
    }
    onMusicFinished(){
        if (this.currentMusic==this.loopStart){
            this.playRandomLoop()
        }else if(this.currentMusic==this.loopEnd){

        }else{
            this.playRandomLoop()
        }
    }
    playRandomLoop(){
        var index=Math.floor(Math.random()*this.loopList.length)
        var music=this.loopList[index]
        if (music==this.currentMusic){
            var index=Math.floor(Math.random()*this.loopList.length)
            var music=this.loopList[index]
        }
        this.play(music)

    }
    begin(){
        this.play(this.loopStart)
    }
    end(){
        this.play(this.loopEnd)
    }
}