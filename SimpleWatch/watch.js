
    function updateClock() {

      // Get current date and time
      let now = new Date();

      // Extract hours, minutes, seconds
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      // Decide AM or PM
      let ampm;
      if (hours >= 12) {
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      // Convert 24-hour time to 12-hour format
      if (hours > 12) {
        hours = hours - 12;
      }

      // Midnight case: 0 should be 12
      if (hours === 0) {
        hours = 12;
      }

      // Add leading zero if number is less than 10
      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      // Display time inside the clock element
      document.getElementById("clock").innerText =
        hours + ":" + minutes + ":" + seconds + " " + ampm;
    }

    // Run immediately when page loads
    updateClock();

    // Update every 1 second
    setInterval(updateClock, 1000);
