import logo from "../../Star_Wars_Logo.svg";
import s from "./Header.module.scss";

const Header = ({
                  search, onChange = () => {
  }
                }) => {
  return (
    <header>
      <img src={logo} alt="STAR_WARS_LOGO" className={s.logo}/>
      <h1>STAR WARS Characters</h1>
      <form>
        <input type="text" value={search} onChange={onChange} placeholder="Search..."/>
      </form>
    </header>
  )
    ;
};

export default Header;