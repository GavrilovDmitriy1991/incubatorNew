// Get elements from the DOM
const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let timerId; // Timer ID for setInterval
let startTime; // Start time of the timer
let elapsedTime = 0; // Elapsed time in milliseconds
let isRunning = false; // Flag to track if the timer is running

// Add event listeners to buttons
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Function to start the timer
function startTimer() {
  if (isRunning) return; // Prevent multiple starts
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  timerId = setInterval(updateTimer, 10);
}

// Function to stop the timer
function stopTimer() {
  if (!isRunning) return; // Prevent stopping when not running
  isRunning = false;
  clearInterval(timerId);
}

// Function to reset the timer
function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  updateTimerDisplay();
}

// Function to update the timer display
function updateTimer() {
  elapsedTime = Date.now() - startTime;
  updateTimerDisplay();
}

// Function to update the timer display in the format HH:MM:SS.mmm
function updateTimerDisplay() {
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
    seconds
  )}.${padZeroMilliseconds(milliseconds)}`;
  timerDisplay.textContent = formattedTime;
}

// Function to pad zero to single-digit numbers
function padZero(number) {
  return number.toString().padStart(2, "0");
}

// Function to pad zero to milliseconds
function padZeroMilliseconds(milliseconds) {
  return milliseconds.toString().padStart(3, "0");
}
