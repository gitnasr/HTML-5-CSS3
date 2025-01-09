function doHeavyWork() {
    let result = 0;
    for (let i = 0; i < 100_000_000_000; i++) {
        result += i;
    }
    return result;
}

self.onmessage = (e) => {
    if (e.data === "start") {
        self.postMessage(doHeavyWork());
    }
};

