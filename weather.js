async function getWeather() {
    const state = document.getElementById("state").value;
    const apiKey = "bfd84c988fc845ef86e60011250503"; //WeatherApi key paste heree
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${state},India&aqi=no`;

    const bgImages = {
        "Delhi": "redfort.avif",
        "Mumbai": "indiagate.jpg",
        "Kolkata": "hawra.jpg",
        "Chennai": "chennai.jpg",
        "Patna": "patna.jpeg",
        "Bangalore":"banglore.jpg"
    };

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weather").innerHTML = `
            <p>Temperature in ${state}: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="https:${data.current.condition.icon}" alt="Weather Icon">
        `;

        if (bgImages[state]) {
            document.body.style.backgroundImage = `url('${bgImages[state]}')`;
        }

    } catch (error) {
        document.getElementById("weather").innerText = "Error fetching weather data!";
    }
}