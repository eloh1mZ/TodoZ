import App from '@components/App';
import './index.css';

window.app = new App({
	target: document.querySelector('#app'),
	hydrate: true
});

if (process.env.NODE_ENV === 'production') {
	require('offline-plugin/runtime').install();
}