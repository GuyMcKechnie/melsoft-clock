// wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // get the element where the clock will be displayed
    const clockElement = document.getElementById('clock');

    /**
     * This function updates the clock display with the current time.
     */
    function updateClock() {
        // create a new Date object to get the current time
        const now = new Date();

        // get hours, minutes, and seconds
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // determine if it's AM or PM
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // convert to 12-hour format
        // if hours is 0 (midnight), it should be 12.
        // if hours is greater than 12, subtract 12.
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        // add a zero to minutes and seconds if they are less than 10
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        const formattedHours = hours < 10 ? '0' + hours : hours;

        // construct the final time string
        const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

        // update the HTML element's text with the new time
        clockElement.innerText = timeString;
    }

    // call updateClock once immediately to show the time without a 1 second delay
    updateClock();

    // set an interval to run the updateClock function every 1 second
    setInterval(updateClock, 1000);
});