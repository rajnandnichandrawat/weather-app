import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Wonderland",
        feelsLike : 28.31,
        humidity : 48,
        temp : 28.03,
        tempMax : 28.03,
        tempMin : 28.03,
        weather : "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Isha :)</h2>
            < SearchBox  updateInfo={updateInfo}/>
            < InfoBox info={weatherInfo} />
        </div>
    )
}