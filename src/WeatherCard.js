import Fetch from './Fetch';

const WeatherCard = () => {
    const data = Fetch();
    return (


        <div class="main ">


           { data && <div class=" weather-panel">
                <div className="nexxt">
                    <div class="col-xs-6 next">
                      { data && <h2>{data.location.name}<br /><small>{data.location.localtime}</small></h2>}
                        <p class="h3"><img src={data.current.condition.icon} alt="" /> <br/>&nbsp;&nbsp;&nbsp;&nbsp;{data.current.condition.text}</p>
                        <h4>cloud:{data.current.cloud}</h4>
                    </div>
                    <div class="col-xs-6 text-centerr">
                        
                        <h3> current temp : {data.current.temp_c}°</h3>
                        
                    </div>
                    <div class="col">
                       
                    </div>
                </div>
            </div>}
        </div>



    );
}

export default WeatherCard;