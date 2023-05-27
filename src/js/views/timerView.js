function updateTimerUI(minute, second) {
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    minutesElement.textContent = String(minute).padStart(2, '0');
    secondsElement.textContent = String(second).padStart(2, '0');
}

export default updateTimerUI;