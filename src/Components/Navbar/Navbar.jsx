import './NavbarStyle.css'

function Navbar(){


    return(
        <div className='nav-container'>
            <div className='left-nav'>
                LOGO
            </div>
            
            <div className='right-nav'>
                <ul className='list-container'>
                    <a href="#services" className='list-item'><li>SERVICIOS</li></a>
                    <li className='list-item'>PROYECTOS</li>
                    <li className='list-item'>CONTACTO</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar