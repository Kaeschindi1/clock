const digitalClock = () => {
    const date = new Date();
    const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const session = date.getHours() >= 12 ? 'PM' : 'AM';

    const timeDisplay = `${hours}: ${minutes}: ${seconds}: ${session}`;
    document.getElementById('digital-clock').innerText = timeDisplay;

    setTimeout(digitalClock, 1000);
} 
digitalClock();