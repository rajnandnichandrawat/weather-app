import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}) {
    const INI_IMG = "https://plus.unsplash.com/premium_photo-1675177698286-8c3edc5de261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const HOT_URL = "https://media.istockphoto.com/id/2231635523/photo/hot-weather.jpg?s=1024x1024&w=is&k=20&c=-2Bd5PHeSxBex1zauvUKqo67v0wr2JePVI8yyB_lcb0=";
    const COLD_URL = "https://images.unsplash.com/photo-1613626253550-1150aaa37dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1669711255214-f1ab172d5691?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                            info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <LightModeIcon /> : <AcUnitIcon />
                        }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;c</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;c</p>
                            <p>Max Temp = {info.tempMax}&deg;c</p>
                            <p>The Weather can be described as <i>{info.weather}</i> Feel's Like = {info.feelsLike}&deg;c</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
