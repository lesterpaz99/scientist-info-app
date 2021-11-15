import Header from '../components/Header';
import Home from '../views/Home';
import Characters from '../views/Characters';
import NotFound from '../views/NotFound';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

interface Pages {
	[key: string]: () => string | Promise<string>;
}

const routes: Pages = {
	'/': Home,
	'/:id': Characters,
	NotFound,
};

const router = async (): Promise<any> => {
	const header: HTMLElement | null = document.getElementById('header');
	const content: HTMLElement | null = document.getElementById('content');

	if (header) {
		header.innerHTML = Header();
	}

	let hash: string = getHash();
	let route: string = resolveRoutes(hash);
	let render: () => string | Promise<string> = routes[route]
		? routes[route]
		: routes.NotFound;

	if (content) {
		content.innerHTML = await render();
	}

	if (location.hash === '' || location.hash === '#') {
		content?.classList.add('content-home');
	} else {
		content?.classList.remove('content-home');
	}
};

export default router;
