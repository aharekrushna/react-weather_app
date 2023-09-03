import weatherlogo from './weatherlogo.png';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={weatherlogo} alt="hk" className='weatherlogo' />
            <div className="nav-contents">
            
            </div>
           
        </div>
        
     );
}
 
export default Navbar;