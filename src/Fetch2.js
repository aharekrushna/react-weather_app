import { useState, useEffect } from "react";
const url = 'https://forecast9.p.rapidapi.com/rapidapi/forecast/america/summary/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c2e6781129msh52a867e595fedd3p1bacccjsn3f87964a0fe5',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};


const Fetch2 = () => {
  const [data2, setData] = useState(null);
  useEffect(() => {
    fetch(url,options)
      .then((result) => {
        console.log(result);
        return result.json();
        

      })
      .then(data2 => {
        console.log(data2);
        setData(data2);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return data2;
};


export default Fetch2;