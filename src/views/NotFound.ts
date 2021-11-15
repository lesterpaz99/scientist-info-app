const NotFound = (): string => {
	return `
    <div class="error404">
      <div class="error404__container">
        <div class="description">
          <h2 class="description__title">Oh no! It seems you're in a pickle, Rick!</h2>
          <p>Page not found</p>
        </div>
        <h3 class="logo-error">404</h3>
        <button>
          <a href="#">
            Go back
          </a>
        </button>
      </div>
  `;
};

export default NotFound;
