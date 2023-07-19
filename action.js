window.addEventListener("DOMContentLoaded", function() {
    // Set the initial values
    let workDone = 0;
    let yearsOfExperience = 0;
    let totalClient = 0;
    let awardWon = 0;
  
    // Function to count the numbers
    function countNumbers() {
      if (workDone < 62) {
        workDone += 2;
        document.getElementById("work-done").textContent = workDone;
      }
      if (yearsOfExperience < 7) {
        yearsOfExperience += 1;
        document.getElementById("year").textContent = yearsOfExperience;
      }
      if (totalClient < 62) {
        totalClient += 2;
        document.getElementById("total-client").textContent = totalClient;
      }
      if (awardWon < 3) {
        awardWon += 1;
        document.getElementById("award-won").textContent = awardWon;
      }
  
      if (workDone < 62 || yearsOfExperience < 7 || totalClient < 62 || awardWon < 3) {
        setTimeout(countNumbers, 60); // Adjust the delay (in milliseconds) for faster counting
      }
    }
  
    // Call the counting function
    countNumbers();
  });
  