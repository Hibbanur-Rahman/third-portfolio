var prev=document.getElementById('prev');
var next=document.getElementById('next');
var slides=document.querySelectorAll('.slides-box');
var counter = 0;
console.log(slides);
function gonext() {
    counter++;
    if(counter>=slides.length)
    {
        counter=0;
    }
    slideImage();
    console.log(counter);
}
function goprev(){
    counter--;
    if(counter<0)
    {
        counter=slides.length-1;
    }
    slideImage();
    console.log(counter);
}
var slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}

// function play_music(){
//     let mysound=new Audio('divine-3-59-am-prod.by-stunnah-beatz-official-music-video-svfromnet.com.mp3');
//     mysound.play();
// }