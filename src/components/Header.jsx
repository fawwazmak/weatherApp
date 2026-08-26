import React from 'react'
import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";


const Header = () => {
    const [switchUnits, setSwitchUnits] = useState(false)
    const units = [
        {
            name: "Metric",
            Temperature: "Celsius (°C)",
            Windspeed: "Km/h",
            Precipitation: "Millimeters (mm)"
        },
        {
            name: "Imperial",
            Temperature: "Fahrenheit (°F)",
            Windspeed: "mph",
            Precipitation: "Inches (in)"
        }
    ]
    const [selectedUnit, setSelectedUnit] = useState("Metric")

    
  return (
    <div className='flex items-center justify-between font-[DM_Sans]'>
        {/* This is the logo  */}
        <img src={logo} alt="Logo" className='block max-w-1/2' />

        {/* This is the unit switcher and dropdown menu */}
        <div>
            <button className='flex hover:bg-[hsl(243_23%_30%)] transition duration-1000 text-[hsl(0_0%_100%)] items-center cursor-pointer justify-between gap-2 bg-[hsl(243_27%_20%)] p-2 rounded-md focus:outline-1 focus:outline-white' onClick={() => setSwitchUnits(!switchUnits)}>
                <CiSettings />
                <p>Units</p>
                <IoIosArrowDown className={`${switchUnits ? 'rotate-180' : ''} transition-all transition-duration-700`} />
            </button>


            {/* This the dropdown menu that appears when the user clicks on the unit switcher. It allows the user to switch between Metric and Imperial units, and displays the available units for Temperature, Windspeed, and Precipitation. */}
            {switchUnits && (
                <div className='text-[hsl(250_6%_84%)] font-medium text-sm absolute md:top-18 top-14 bg-[hsl(243_27%_20%)] md:right-12 right-2 rounded-md p-2 min-w-1/6'>
                    <button onClick={() => {setSelectedUnit(selectedUnit === "Metric" ? "Imperial" : "Metric")}} className='focus:outline-1 focus:outline-white w-full text-left rounded-md p-2 block cursor-pointer hover:bg-[hsl(243_23%_30%)] transition duration-1000'>Switch to {selectedUnit === "Metric" ? "Imperial" : "Metric"}</button>

                    <div className="flex flex-col gap-2 mt-2"> 
                        {Object.keys(units[0])
                        .filter((key) => key !== "name")
                        .map((key, index) => (
                            <div className="flex flex-col gap-2 border-b-[0.5px] border-[hsla(0,0%,73%,1)] pb-1" key={key}>
                                <h3 className="text-xs text-[hsla(0,0%,73%,1)] font-bold">{key}</h3>

                                <div className="flex flex-col gap-1">
                                    {units.map((unit, index) => (
                                        <div key={unit.name} className={`p-2 mb-1 text-sm flex justify-between items-center ${selectedUnit === unit.name? "bg-[hsl(243_23%_30%)] rounded-md" : ""}`}>
                                            <p>{unit[key]}</p>

                                            {selectedUnit === unit.name && (
                                                <IoCheckmarkSharp />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Header
