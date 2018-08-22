import ReactDOM from 'react-dom';
import './index.css';
import Setup from './config/setup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(Setup(), document.getElementById('root'));
registerServiceWorker();
