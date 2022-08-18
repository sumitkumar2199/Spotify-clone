let songIndex = 0;
let audioelement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songitemplay = Array.from(
  document.getElementsByClassName("songitemplay")[0]
);

let songs = [
  { songname: "1stsong", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
  { songname: "1stsong", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
  { songname: "1stsong", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
  { songname: "1stsong", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
  { songname: "1stsong", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
  { songname: "1stsong", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
  { songname: "1stsong", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
  { songname: "1stsong", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
  { songname: "1stsong", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
  { songname: "1stsong", filepath: "songs/10.mp3", coverpath: "covers/10.jpg" },
];

songItem.forEach((ele, i) => {
  ele.getElementsByTagName("img")[0].src = songs[i].coverpath;
  ele.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});
//handle play/pause
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//listen to events
audioelement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  console.log(progress);
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioelement.currentTime =
    (myprogressbar.value * audioelement.duration) / 100;
});

const makeallplays = () => {
  songitemplay.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};
songitemplay.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    makeallplays();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
  });
});
