import axios from 'axios'

export function fetchData(city) {
  return axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
    params: {
      city: city,
      key: '用户key'
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.error(error)
  })
}