import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';
import NxWelcome from './nx-welcome';

enum AppRoute {
  Main = '/',
  NotFound = '*',
}

const App = () => {
  return (
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path={AppRoute.NotFound} element={<MainPage />} />
      </Routes>
  );
};

export default App;
