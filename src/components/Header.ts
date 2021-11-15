import Logo from '../assets/logoRandM.png';

const Header = (): string => {
	return `
			<div class="title-container">
				<a>
					<a href="/">Home</a>
				</a>
			</div>
			<div class="logo-container">
				<img src="${Logo}" alt="logo">
			</div>
			<div class="header-nav">
				<a href="#/about">About</a>
			</div>
	`;
};

export default Header;
