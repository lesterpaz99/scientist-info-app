const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id?: string): Promise<void> => {
	const apiUrl = id ? `${API}${id}` : API;
	try {
		const response: Response = await fetch(apiUrl);
		return response.json();
	} catch (error) {
		console.log(error);
		throw new Error('Fetch Error');
	}
};

export default getData;
