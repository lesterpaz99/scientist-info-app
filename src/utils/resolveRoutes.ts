const resolveRoutes = (route: string): string => {
	if (route.length <= 3) {
		return route === '/' ? route : '/:id';
	}
	return `/${route}`;
};

export default resolveRoutes;
