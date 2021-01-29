import React, { useState, useEffect } from 'react'


function CountryDetails(match) {

    let url = `https://covid19.mathdro.id/api/countries/${match.match.params.params}`

    const [countryInfo, setContryInfo] = useState({

        confirmed: { value: "", details: "" },
        recovered: { value: "", details: "" },
        deaths: { value: "", details: "" },

    })

    useEffect(async () => {
        let contDetReq = await fetch(url);
        let contDetbody = await contDetReq.json();

        setContryInfo(contDetbody)

    }, [])




    console.log(match.match.params.params)
    return (
        < div className="row justify-content-center" >
            {/* Earnings (Monthly) Card Example */}
            < div className="col-xl-3 col-md-6 mb-4" >
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Confirmed</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{countryInfo.confirmed.value}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Earnings (Monthly) Card Example */}
            < div className="col-xl-3 col-md-6 mb-4" >
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Recovered</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{countryInfo.recovered.value}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* Earnings (Monthly) Card Example */}

            {/* Pending Requests Card Example */}
            < div className="col-xl-3 col-md-6 mb-4" >
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Deaths</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{countryInfo.deaths.value}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-comments fa-2x text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CountryDetails;