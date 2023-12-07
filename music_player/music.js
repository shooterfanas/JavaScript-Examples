class Music{
    constructor(title,singer,img,file){
        this.title= title;
        this.singer= singer;
        this.img= img;
        this.file= file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList=[
    new Music("Before I Die (Official Acoustic Live)","Tepki X Motive X Misha","1.jpg","before_i_die.mp3"),
    new Music("No Roots","Alice Merton","2.jpg","no_roots.mp3"),
    new Music("Summertime Sadness (Official Music Video)","Lana Del Rey","3.jpg","summertime_sadness.mp3")
]