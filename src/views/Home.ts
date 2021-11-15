import getData from '../utils/getData';

const Home = async (): Promise<string> => {
	const characters = await getData();
	const { results }: any = characters;

	const card = document.createElement('div');
	card.classList.add('characters');

	const view: Array<any> = (card.innerHTML = results.map(
		(character: any) => `
		<article class="character-container">
			<div>
				<a href="#/${character.id}/">
					<img src="${character.image}" alt="name" />
					<h2>${character.name}</h2>
				</a>
			</div>
		</article>
		`
	));
	return view.join('');
};

export default Home;
