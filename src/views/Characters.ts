import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Characters = async (): Promise<string> => {
	const id = getHash();
	const character = await getData(id);

	const { image, name, status, species, gender, origin, location }: any =
		character;

	return `
		<div class="character">
			<div class="character__info">
				<div class="name-container">
					<h2 class="character__name">${name}</h2>
					<div></div>
				</div>

				<h3 class="details">Species: ${species}</h3>
				<h3 class="details">Status: ${status}</h3>
				<h3 class="details">Gender: ${gender}</h3>
				
				<h3 class="second-details"><span>Origin</span>: ${origin.name}</h3>
				<h3 class="second-details"><span>Last location</span>: ${location.name}</h3>
			</div>
			<div class="character__img">
				<img src="${image}" alt="${name}" />
			</div>
		</div>
	`;
};

export default Characters;
