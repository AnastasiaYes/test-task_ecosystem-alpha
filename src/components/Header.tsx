import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <nav className='header_nav container'>
                <NavLink to={'/'} className={'nav_logo'}>
                    <strong className='logo_card'>Card</strong>
                    <span className='logo_ify'>ify</span>
                </NavLink>

                <ul className='nav_list'>
                    <li className='nav-list__item'>
                        <NavLink
                            to='/products'
                            className={({isActive}) => (isActive ? 'active-link' : '')}
                        >Products</NavLink>
                    </li>
                    <li className='nav-list__item'>
                        <NavLink
                            to='/create-product'
                            className={({isActive}) => (isActive ? 'active-link' : '')}
                        >Create</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;