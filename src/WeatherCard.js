import Fetch from './Fetch';

const WeatherCard = () => {
    const data = Fetch();
    return (


        <div class="main ">


            <div class="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4 weather-panel">
                <div className="nexxt">
                    <div class="col-xs-6 next">
                        <h2>Lucerne<br /><small>May 24, 2016</small></h2>
                        <p class="h3"><i class="mi mi-fw mi-lg mi-rain-heavy"></i> Rainy</p>
                    </div>
                    <div class="col-xs-6 text-centerr">
                        <div class="h1 temperature">
                            <span>12°&nbsp;&nbsp; </span>
    
                            <small> ||&nbsp;&nbsp;&nbsp;8° / 13°</small>
                        </div>
                    </div>
                    <div class="col">
                        <ul class="forecast">
                            <li class="text-center">
                                <h3 class="h5">Wed</h3>
                                <p><i class="sun"></i>9°/18°</p>
                            </li>
                            <li class="text-center">
                                <h3 class="h5">Thu</h3>
                                <p><i class="sun"></i>12°/23°</p>
                            </li>
                            <li class="text-center">
                                <h3 class="h5">Fri</h3>
                                <p><i class="sun"></i>14°/24°</p>
                            </li>
                            <li class="text-center">
                                <h3 class="h5">Sat</h3>
                                <p><i class="rain"></i>15°/23°</p>
                            </li>
                            <li class="text-center">
                                <h3 class="h5">Sun</h3>
                                <p><i class="rain-heavy"></i>15°/22°</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default WeatherCard;