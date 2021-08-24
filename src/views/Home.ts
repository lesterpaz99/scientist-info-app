import getData from '../utils/getData';

const content: HTMLElement | null = document.getElementById('content');

const Home = async (): Promise<string> => {
	const characters = await getData();
	const { results }: any = characters;

	const card = document.createElement('div');
	card.classList.add('characters');

	const view: Array<any> = (card.innerHTML = results.map(
		(character: any) => `
		<article class="character-item">
			<a href="#/${character.id}/">
				<img src="${character.image}" alt="name" />
				<h2>${character.name}</h2>
			</a>
		</article>
		`
	));
	return view.join();
};

export default Home;
