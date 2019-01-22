var $musicManager;
var MusicManager = /** @class */ (function () {
    function MusicManager() {
        this.loopStart = "res/sound/loopStart.mp3";
        this.loopEnd = "res/sound/loopEnd.mp3";
        this.loopList = [];
        this.currentMusic = "";
        $musicManager = this;
        this.loopList = [
            "res/sound/loop1.mp3",
            "res/sound/loop2.mp3",
            "res/sound/loop3.mp3",
        ];
    }
    MusicManager.prototype.play = function (music) {
        this.currentMusic = music;
        SoundManager.playMusic(music, 1, new Handler(this, this.onMusicFinished));
    };
    MusicManager.prototype.onMusicFinished = function () {
        if (this.currentMusic == this.loopStart) {
            this.playRandomLoop();
        }
        else if (this.currentMusic == this.loopEnd) {
        }
        else {
            this.playRandomLoop();
        }
    };
    MusicManager.prototype.playRandomLoop = function () {
        var index = Math.floor(Math.random() * this.loopList.length);
        var music = this.loopList[index];
        this.play(music);
    };
    MusicManager.prototype.begin = function () {
        this.play(this.loopStart);
    };
    MusicManager.prototype.end = function () {
        this.play(this.loopEnd);
    };
    return MusicManager;
}());
//# sourceMappingURL=MusicManager.js.map