export function extractTime(dateString) {
    const date = new Date(dateString);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
  
    // Extract hours and minutes and pad zeros
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
  
    return `${hours}:${minutes}`;
  }
  
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }
  