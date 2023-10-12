/* eslint-disable react/prop-types */
import './navstyle.css'

const Navbar = (props) => {
    const navbarStyles= {
        "backgroundColor": "black",
        "color": "white"
    }
    return ( 
        <>
        <nav style={navbarStyles}>
            <h2>{props.headline}</h2>
            {props.menuitems && props.menuitems.map((m) =>(
                <div className="menuitem" key={m}>{m}</div>
            ))}
            {!props.menuitems && (<><div className="menuitem">Home</div>
            <div className="menuitem">About</div>
            <div className="menuitem">Career</div>
            <div className="menuitem">Contact us</div></>)}
            
        </nav>
        </>
     );
}
 
export default Navbar;