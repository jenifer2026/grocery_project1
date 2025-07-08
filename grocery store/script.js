document.getElementById('getLocationBtn').addEventListener('click', () => {
    const display = document.getElementById('locationDisplay');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          display.innerHTML = `Latitude: ${lat} <br> Longitude: ${lon}`;
        },
        (error) => {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              display.innerHTML = "User denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              display.innerHTML = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              display.innerHTML = "The request to get user location timed out.";
              break;
            default:
              display.innerHTML = "An unknown error occurred.";
              break;
          }
        }
      );
    } else {
      display.innerHTML = "Geolocation is not supported by this browser.";
    }
  });