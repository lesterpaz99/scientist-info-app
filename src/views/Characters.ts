import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Characters = async (): Promise<string> => {
	const id = getHash();
	const character = await getData(id);

	const { image, name, status, species, gender, origin, location }: any =
		character;

	return `
		<div class="character-inner">
			<div class="character-info">
				<h2>${name}</h2>
				<h3>Species: ${species}</h3>
				<h3>Status: ${status}</h3>
				<h3>Gender: ${gender}</h3>
				<h3>Origin: ${origin.name}</h3>
				<h3>Last location: ${location.name}</h3>
			</div>
			<div class="character-img">
				<img src="${image}" alt="${name}" />
			</div>
		</div>
	`;
};

export default Characters;
