import './Footer.css';

function Footer(prop: {footText: string}) {
  return (
    <footer>
      <p> {prop.footText} </p>
    </footer>
  );
}

export default Footer;
