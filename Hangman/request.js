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
//old
// const getCountryInfo = (countryCode) => {
//     return fetch('https://restcountries.eu/rest/v2/all', {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch the puzzle')
//         } }).then((data) => {
            
//             country = data.find((c)=>{return (c.alpha2Code===countryCode)})
//             return country.name
//         })        
// }
// const getLocation = () => {
//     return fetch('https://ipinfo.io/json?token=e0a43294879563', {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch ip info')
//         } }).then((resolve) => {
            
//             return resolve
//         }) 
// }
// const getCountryInfo = (countryCode) => new Promise((resolve,reject) => {
//     // Making an HTTP request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if ((e.target.readyState === 4) && (e.target.status === 200)) {
//             const countries = JSON.parse(e.target.responseText)
//             country = countries.find((c)=>{return (c.alpha2Code===countryCode)})
//             resolve(country.name)
//         }
//         else if (e.target.readyState === 4) { 
//             reject('An error has taken place')
//         }
//     })
//     request.open('GET', 'https://restcountries.eu/rest/v2/all')
//     request.send()
// })
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     reject('Example data error')
//     }, 2000)
//     })

// const getCountryInfo = (countryCode, callback)=>{
//     // Making an HTTP request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if ((e.target.readyState === 4) && (e.target.status === 200)) {
//             const countries = JSON.parse(e.target.responseText)
//             country = countries.find((c)=>{return (c.alpha2Code===countryCode)})
//             callback(undefined, country.name)
//         }
//         else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined)
//         }
//     })
//     request.open('GET', 'https://restcountries.eu/rest/v2/all')
//     request.send()
// }


