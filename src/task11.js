const seconds = 3665;

const hours = Math.floor(seconds / 3600);
const minutes = Math.floor((seconds % 3600) / 60);
const remainingSeconds = seconds % 60;

console.log("Время:", hours, "ч", minutes, "мин", remainingSeconds, "сек");