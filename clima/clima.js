
const axios =require('axios');


const getClima=async (lat,lng)=>{
	const resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8dc6e081e84d45736d163663225c950f&units=metric`)

return resp.data.main.temp;
}



module.exports={
	getClima
}
