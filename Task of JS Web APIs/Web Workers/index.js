const start = document.getElementById("start");
const stop = document.getElementById("stop");
const statusLabel = document.getElementById("status");
const changeBackground = document.getElementById("change");
const workerResult = document.getElementById("worker-result");

let worker;

start.addEventListener("click", () => {
	worker = new Worker("worker.js");
	worker.onmessage = (e) => {
		statusLabel.textContent = "Worker is done";
		workerResult.textContent = e.data;
	};
	worker.postMessage("start");
	statusLabel.textContent = "Worker is running";
});

stop.addEventListener("click", () => {
	worker.terminate();
	statusLabel.textContent = "Worker is stopped";
});

changeBackground.addEventListener("click", () => {
	const colors = ["red", "green", "blue", "yellow", "purple", "pink", "orange"];
	document.body.style.backgroundColor =
		colors[Math.floor(Math.random() * colors.length)];
});
