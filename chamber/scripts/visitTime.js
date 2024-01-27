window.onload = function() {
  // Get the current date and time
  let currentDate = new Date();

  // Get the last visit date from local storage
  let lastVisit = localStorage.getItem('lastVisit');

  // If there was a last visit date
  if (lastVisit) {
      lastVisit = new Date(lastVisit);

      // Calculate the difference in days
      let diffDays = Math.round((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

      // Check if the user is back within a day
      if (diffDays < 1) {
          document.getElementById('visitTime').innerHTML = 'Back so soon! Awesome!';
      } else {
          // Handle singular and plural days
          let dayString = diffDays === 1 ? 'day' : 'days';
          document.getElementById('visitTime').innerHTML = `You last visited ${diffDays} ${dayString} ago.`;
      }
  } else {
      // If there's no last visit date in local storage, this is the user's first visit
      document.getElementById('visitTime').innerHTML = 'Welcome! Let us know if you have any questions.';
  }

  // Update the last visit date in local storage
  localStorage.setItem('lastVisit', currentDate.toString());
}
