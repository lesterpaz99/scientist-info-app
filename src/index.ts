import router from './routes/index.routes';
import './main.scss';

router();
window.addEventListener('hashchange', () => router());
