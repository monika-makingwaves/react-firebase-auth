import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import Setup from './config/setup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(Setup(), document.getElementById('root'));
registerServiceWorker();