import {Link} from 'react-router-dom';

const Navbar = () =>{
    return (
        <div style={{display:'flex', alignItems:'space-between'}}>
            <span className='fs-1'>Redux Toolkit Example</span>
            <span className=''>
            <Link to="/" className='fs-1 p-2'>Home</Link>
            <Link to="/Cart" className='fs-1 p-2'>Cart</Link>
        </span>
        <span className='fs-1'>Card Item:0</span>
        </div>
    );
}

export default Navbar;