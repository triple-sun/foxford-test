import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from 'react-redux';
import browserHistory from './app/browser-history';
import { store } from './app/store/store';
import HistoryRouter from './app/components/history-route/history-route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>
);
