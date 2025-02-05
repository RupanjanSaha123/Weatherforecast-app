document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    const apiKey = '76204b90dd7645f48ab131207250402';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDetails = `
                <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
                <p><strong>Air Quality Index:</strong> ${data.current.air_quality.pm2_5}</p>
                <img src="${data.current.condition.icon}" alt="Weather icon">
            `;
            document.getElementById('weatherDetails').innerHTML = weatherDetails;
        })
        .catch(error => {
            document.getElementById('weatherDetails').innerHTML = '<p>Could not fetch weather data. Please try again.</p>';
            console.error('Error fetching weather data:', error);
        });
});