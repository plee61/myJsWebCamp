// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
if ((e.target.readyState === 4) && (e.target.status === 200)) {
    const data = JSON.parse(e.target.responseText)
    console.log(data) 
}
else if (e.target.readyState === 4) {
    console.log('An error has taken place')
}
})
request.open('GET', 'https://restcountries.eu/rest/v2/all')
request.send()