import css from './Container.module.css';
import { getRandomHexColor } from 'utils';
export const Container = ({ children }) => (
  <div
    className={css.container}
    style={{ backgroundColor: getRandomHexColor() }}
  >
    {children}
  </div>
);
