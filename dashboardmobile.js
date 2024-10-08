document.getElementById('viewSelector').addEventListener('change', function() {
    const registrationView = document.getElementById('registration');
    const tracingView = document.getElementById('tracing');

    if (this.value === 'register') {
        registrationView.style.display = 'block';
        tracingView.style.display = 'none';
    } else {
        registrationView.style.display = 'none';
        tracingView.style.display = 'block';
    }
});

// Google Maps initialization
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: -34.397, lng: 150.644 },
    });

    document.getElementById('traceButton').addEventListener('click', function() {
        const petID = document.getElementById('petID').value;
        // Assuming you have a function to get pet location by ID
        const petLocation = getPetLocationById(petID); // implement this function
        if (petLocation) {
            new google.maps.Marker({
                position: petLocation,
                map: map,
            });
            map.setCenter(petLocation);
        } else {
            alert('Pet not found!');
        }
    });
}

// Load the Google Maps API
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
document.head.appendChild(script);
