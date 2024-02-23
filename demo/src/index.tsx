import { createRoot } from 'react-dom/client';
import App from './App';
console.log('qqqqqqqqqqqqqqqqqqqq')
document.addEventListener("DOMContentLoaded", () => {
	const root = createRoot(document.getElementById('root')!);
	root.render(<App/>);
});