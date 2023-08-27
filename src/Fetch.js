import { useState, useEffect } from "react";
// var name = "india";
const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=india";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c2e6781129msh52a867e595fedd3p1bacccjsn3f87964a0fe5",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const Fetch = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then((result) => {
        console.log(result);
        return result.json();
        

      })
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return data;
};

export default Fetch;
