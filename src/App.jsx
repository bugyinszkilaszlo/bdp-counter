import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as style from './root.module.scss';
import { Home } from './pages/Home/Home';
import { Counter } from './pages/Counter/Counter';

export function App() {
  return (
    <div className={style.base}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Counter type='six-count' />} path='/six-count' />
          <Route element={<Counter type='navy-seal' />} path='/navy-seal' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
