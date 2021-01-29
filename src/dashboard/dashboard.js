import React, { useState, useEffect } from 'react'
import Country from "../country/country"
import { Link } from 'react-router-dom'



function Dashboard() {

    const [countryList, setCountryList] = useState([{ name: "" }]);

    useEffect(async () => {
        let countryReq = await fetch("https://covid19.mathdro.id/api/countries");
        let countryData = await countryReq.json();
        console.log(countryData.countries)
        setCountryList([...countryData.countries])

    }, [])

    return (
        <div className="row justify-content-center">
            {
                countryList.map((country, index) => {
                    return (

                        <Country key={index} country={country}></Country>

                    )
                })
            }
        </div>
    )
}

export default Dashboard