
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const WeatherBox = () => {
  let API_KEY = "b725531af1851c6c18db30cbaf97493e";
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [vid, setVid] = useState("");

  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_KEY}`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      await axios.get(URL).then((response) => {
        setData(response.data);
      });
    }
  };

  let currentWeather = data.weather ? data.weather[0].main : null;
  
  useEffect(() => {
    console.log(currentWeather);
    setVid(`/Videos/${currentWeather}.mp4`)
  }, [data.weather]);
  
  return (
    <div className="Top">
      <div className="Video flex flex-col overflow-hidden">
        <video src={vid} className="object-fill" autoPlay loop muted></video>
        <div className=" position: absolute text-center text-xl font-sans font-bold mx-5 my-4 bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent drop-shadow">
          The Weather App
        </div>
        <div className="absolute -translate-x-1 mx-[44rem] my-[3rem] bg-transparent">
          <div className="flex">
            <input
              value={city}
              type="text"
              onKeyUp={searchLocation}
              onChange={(event) => setCity(event.target.value)}
              className="  bg-gray-100 bg-opacity-20 px-5 text-left text-gray-500 w-[300px] h-[40px] rounded focus:outline-none focus:ring-1 focus:ring-white placeholder:text-white-300"
              placeholder="Search City"
            />
          </div>
        </div>
        <div className="text-5xl font-extrabold absolute top-1/2 left-1/2 transform -translate-x-[800px] -translate-y-10 text-white">
          <div className="">
            <h2 className="Location transition-opacity duration-3000">
              {data.name}{}
            </h2>
          </div>
        </div>
        <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="TempDetails text-8xl font-Poppins font-thin">
            {data.main ? <h2>{Math.floor(data.main.temp)}</h2> : null}
          </div>
        </div>
      </div>
      <div className="text absolute top-1/2 left-1/2 transform -translate-x-[-600px] -translate-y-[45px] text-white">
        <div className="humid text-xl font-Poppins font-light">
          {data.main ? <h2>Humidity: {data.main.humidity}%</h2> : null}
        </div>
      </div>
      <div className="text absolute top-1/2 left-1/2 transform -translate-x-[-600px] -translate-y-[90px] text-white">
        <div className="humid text-xl font-Poppins font-light">
          {data.wind ? (
            <div>Wind Speed: {Math.floor(data.wind.speed)} Km/hr</div>
          ) : null}
        </div>
      </div>

      <div className="text absolute top-1/2 left-1/2 transform -translate-x-[-600px] -translate-y-[0px] text-white">
        <div className="humid text-xl font-Poppins font-light">
          {data.main ? (
            <div>Pressure{Math.floor(data.main.pressure)}</div>
          ) : null}
        </div>
      </div>

      <div className="text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-100px] text-white">
        <div className="text-2xl font-Poppins font-extralight">
          {data.main ? (
            <p>Feels like {Math.floor(data.main.feels_like)}</p>
          ) : null}
        </div>
      </div>
      <div className="text-3xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-50px] text-white">
          <div className="">
            <h2 className="Location transition-opacity duration-3000">
              {currentWeather}
            </h2>
          </div>
        </div>
    </div>
    
  );
};
