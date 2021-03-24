const getCountryInfo = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all', {})
        if (response.status === 200) {
            const data = await response.json()
            const country = data.find((c)=>{return (c.alpha2Code===countryCode)})
            return country.name
        } else {
            throw new Error('Unable to fetch the puzzle')
        }       
}
const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=e0a43294879563', {})
        if (response.status === 200) {
            return await response.json()
        } else {
            throw new Error('Unable to fetch ip info')
        } 
}
const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountryInfo(location.country)
}


