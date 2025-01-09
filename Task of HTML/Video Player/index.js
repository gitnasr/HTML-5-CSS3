const video = document.getElementById("video-player");

const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");

const toEndBtn = document.getElementById("toEnd");
const toStartBtn = document.getElementById("toStart");
const seek5Btn = document.getElementById("seek5");
const seekminus5Btn = document.getElementById("seekminus5");
const SeekBar = document.getElementById("seek-bar");
function stopVideo() {
	video.pause();
}

function playVideo() {
	if (video.paused) {
		video.play();
	}
}

function seek5() {
	video.currentTime += 5;
}
function seekminus5() {
	video.currentTime -= 5;
}

function toEnd() {
	video.currentTime = video.duration;
}
function toStart() {
	video.currentTime = 0;
}

playButton.addEventListener("click", playVideo);
stopButton.addEventListener("click", stopVideo);
SeekBar.addEventListener("change", () => {
	video.currentTime = SeekBar.value;
});

toEndBtn.addEventListener("click", toEnd);
toStartBtn.addEventListener("click", toStart);
seek5Btn.addEventListener("click", seek5);
seekminus5Btn.addEventListener("click", seekminus5);



video.addEventListener("timeupdate", (e) => {
	
	
	SeekBar.value = video.currentTime;
});
