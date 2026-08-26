import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";


const MainApp = () => {
    const handleSearchCity = (e) => {
        e.preventDefault()


    }
  return (
    <div className="text-white my-4">
        <div>
            <h1  className="text-5xl font-bold text-center font-[Bricolage_Grotesque] text-wrap tracking-widest my-8">How's the sky today?</h1>

            <form action="" method="post" onSubmit={handleSearchCity} className="flex md:flex-row flex-col flex-wrap items-center mt-4 md:w-2/5 w-full gap-4 md:mx-auto md:justify-between">
                <div className="flex md:flex-1 items-center gap-2 focus-within:outline-1 focus-within:outline-white bg-[hsl(243_27%_20%)] hover:bg-[hsl(243_27%_24%)] transition-all duration-700 p-2 rounded-md mt-4 w-full">
                    <AiOutlineSearch />

                    <input type="text" placeholder="Search for a place..." className="bg-transparent border-none focus:outline-none w-full" />
                </div>

                <button type="submit" className="bg-[hsl(233_67%_56%)] py-2 px-5 md:w-fit w-full rounded-md mt-4 hover:bg-[hsl(243_70%_36%)] transition duration-700 focus:border-2 focus:border-[hsl(233_67%_56%)] focus:outline-[hsl(243_96%_9%)] focus:outline-2">Search</button>
            </form>
        </div>
    </div>
  )
}

export default MainApp
