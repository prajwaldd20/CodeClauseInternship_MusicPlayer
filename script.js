console.log("Hello Music");
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let audioElement= new Audio ("/music/1.mp3")
let progressBar= document.getElementById('ProgressBar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Faded- Alan Walker ", filePath:" /music/1.mp3",  coverPath:"/images/faded.jpeg"},
    {songName: "Blank Space- Taylor Swift ", filePath:" /music/2.mp3",  coverPath:"/images/blankspace.jpeg"},
    {songName: "Perfect - Ed Sheeran  ", filePath:" /music/3.mp3",  coverPath:"/images/perfect.jpeg"},
    {songName: "Kesariya - Arijit Singh ", filePath:" /music/4.mp3",  coverPath:"/images/kesariya.jpeg"},
    {songName: "Unstoppable Song by Sia ", filePath:" /music/5.mp3",  coverPath:"/images/.jpegunstop"},
    {songName: "Jiyo re Bahubali ", filePath:"/music/6.mp3",  coverPath:"/images/bahubali.jpeg"},
    {songName: "Mauli Mauli - Ajay Atul ", filePath:"/music/7.mp3",  coverPath:"/images/mauli.peg"}

]

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
        
       
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
// audioElement.play();
audioElement.addEventListener('timeupdate', ()=>
{
    progress= parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value= progress;

})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime= progressBar.value * audioElement.duration/100 ;
})
const makeAllPlays=()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `music/${songIndex+1}.mp3 `;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
  
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

