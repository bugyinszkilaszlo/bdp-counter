import { Link } from 'react-router-dom';
import * as style from './Home.module.scss';

export function Home() {
  return (
    <div className={style.Home}>
      <Link to='six-count'>SIX COUNT</Link>
      <br />
      <Link to='navy-seal'>NAVY SEAL</Link>
    </div>
  );
}
