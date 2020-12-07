const getCountryInfo = (countryCode, callback)=>{
    // Making an HTTP request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if ((e.target.readyState === 4) && (e.target.status === 200)) {
            const countries = JSON.parse(e.target.responseText)
            country = countries.find((c)=>{return (c.alpha2Code===countryCode)})
            callback(undefined, country.name)
        }
        else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
    request.open('GET', 'https://restcountries.eu/rest/v2/all')
    request.send()
}


