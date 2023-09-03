import Fetch from './Fetch';

const WeatherCard = () => {
    const data = Fetch();
    return (


        <div className="main ">


           { data && <div className=" weather-panel">
                <div className="nexxt">
                    <div className="col-xs-6 next">
                      { data && <h2>{data.location.name}<br /><small>{data.location.localtime}</small></h2>}
                        <p className="h3"><img src={data.current.condition.icon} alt="" /> <br/>&nbsp;&nbsp;&nbsp;&nbsp;{data.current.condition.text}</p>
                        <h4>cloud:{data.current.cloud}</h4>
                    </div>
                    <div className="col-xs-6 text-centerr">
                        
                        <h3> current temp : {data.current.temp_c}°</h3>
                        
                    </div>
                    <div className="col">
                       
                    </div>
                </div>
            </div>}
        </div>



    );
}

export default WeatherCard;