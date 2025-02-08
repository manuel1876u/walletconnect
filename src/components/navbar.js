
import React from 'react'; 
import { Link } from 'react-router-dom';   

const NavbarStyle = {
       backgroundColor: 'white', 
       display: 'flex', 
       paddingBottom : '10px',    
       paddingLeft : '30px',  
       paddingRight : '30px',
       justifyContent: 'space-between',  
       width : '100%',
       position: 'fixed',  
       top:0,
       left : 0,
       right: 0,
       color : 'black',    
       boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.09)',
}

function Navbar() {
       return(
            <div style={NavbarStyle}>  
                 <Link className='link' to='/'> <p>Github</p> </Link>  
                 <Link className='link' to='/'> <p>Docs</p> </Link>    
                  <img className='logo' src='/wclogo.png' alt='walletconnect' />  
                 <Link className='link' to='/'> <p>Wallets</p> </Link> 
                 <Link className='link' to='/'> <p>App</p> </Link> 
            </div>
       );
} 

export default Navbar;
