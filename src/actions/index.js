import axios from 'axios'


const API_KEY = '050094585a0316db00676b70ddc0bd27'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEAHER = 'FETCH_WEAHER'
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ge`
	const request = axios.get(url) 
	return {
		type: FETCH_WEAHER,
		payload: request
	}
}