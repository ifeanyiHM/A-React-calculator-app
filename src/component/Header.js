import icon from './icon.svg';
import star from "./Star.svg";

const Header = () => {
    return ( 
        <div className="header">
            <img src={icon} alt="an icon" />
            <h4>Calculator</h4>
            <img src={star} alt="a star" />
        </div>
     );
}
 
export default Header;