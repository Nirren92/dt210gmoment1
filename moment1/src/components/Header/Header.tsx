import './Header.css';

function Header(prop: {titel: string}) {
  return (
    <header>
      <h1> {prop.titel} </h1>
    </header>
  );
}

export default Header;
