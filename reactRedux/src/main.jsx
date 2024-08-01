import App from './assets/components/App'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import store from './assets/redux/store';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
