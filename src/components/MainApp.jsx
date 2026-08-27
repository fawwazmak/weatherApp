import React from 'react'
import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";


const MainApp = () => {
    const [search, setSearch] = useState("");

    async function fetchWeatherData() {
        try {
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m#");
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log(data);
        }
        catch(error) {
            console.error("Error fetching weather data:", error);
        }
    }


    const handleSearchCity = (e) => {
        e.preventDefault()
        const location = search.trim().replace(/,/g, ' ').replace(/\s+/g, ' ');
        const formattedLocation = location.charAt(0).toUpperCase() + location.slice(1);
        const parts = formattedLocation.split(" ");
        console.log(parts);

        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${formattedLocation}&count=1`)
            .then(response => response.json())
            .then(data => {
                // const latitude = data.results[0].latitude;
                console.log(data)})
            .catch(error => console.log(error))
        ;

        // fetchWeatherData();

    }
    


  return (
    <div className="text-white my-4">
        <div>
            <h1  className="text-5xl font-bold text-center font-[Bricolage_Grotesque] text-wrap tracking-widest my-8">How's the sky today?</h1>

            <form action="" method="post" onSubmit={handleSearchCity} className="flex md:flex-row flex-col flex-wrap items-center mt-4 md:w-2/5 w-full gap-4 md:mx-auto md:justify-between">
                <div className="flex md:flex-1 items-center gap-2 focus-within:outline-1 focus-within:outline-white bg-[hsl(243_27%_20%)] hover:bg-[hsl(243_27%_24%)] transition-all duration-700 p-2 rounded-md mt-4 w-full">
                    <AiOutlineSearch />

                    <input type="text" placeholder="Search for a place..." onChange={(e) => {setSearch(e.target.value)}} className="bg-transparent border-none focus:outline-none w-full" />
                </div>

                <button type="submit" className="bg-[hsl(233_67%_56%)] py-2 px-5 md:w-fit w-full rounded-md mt-4 hover:bg-[hsl(243_70%_36%)] transition duration-700 focus:border-2 focus:border-[hsl(233_67%_56%)] focus:outline-[hsl(243_96%_9%)] focus:outline-2">Search</button>
            </form>


        </div>
    </div>
  )
}

export default MainApp
