import router from './routes/index.routes';

router();
window.addEventListener('hashchange', () => router());
