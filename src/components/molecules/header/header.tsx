import { classicalFF, themesList } from './header.css';

const Header = () => {
  return (
    <nav className={classicalFF}>
      <ul className={themesList}>
        <li>Classic Final Fantasy</li>
        <li>Modern Final Fantasy</li>
        <li>Persona 4</li>
        <li>Persona 5</li>
      </ul>
    </nav>
  );
};

export default Header;
