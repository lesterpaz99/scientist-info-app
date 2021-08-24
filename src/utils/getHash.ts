const getHash = (): string => {
	return (
		location.hash.replace(/\#\/(\d{1,2})\/?/, '$1').toLocaleLowerCase() || '/'
	);
};

export default getHash;
