const geolacateBtn = document.querySelector('#geolocate');

geolacateBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log('Latitiude: $(lat), Longitude: $(lng)');

        const evt = new CustomEvent('userLocationAcquired', {
            detail: { lat, lng },
        });
        events.dispatchEvent(evt);
        });
}


export { initGeolocation };