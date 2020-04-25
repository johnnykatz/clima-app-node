const axios =require('axios');



const getLugarLatLng= async (dir)=>{

	const encodeUrl=encodeURI(dir);
	console.log(encodeUrl);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
		headers: {'x-rapidapi-key': 'fdf7f5aaa9msh1da9532f4d396f7p17969cjsn491ab3c9349a'}
	});

	const resp= await instance.get();

	if(resp.data.Results.length===0){
		throw new Error(`No hay resultados para ${dir}`);
	}

	const data=resp.data.Results[0];
	const direccion=data.name;
	const lat=data.lat;
	const lng=data.lon;
	
	return{
		direccion,
		lat,
		lng
	}
}


module.exports={
	getLugarLatLng
}

