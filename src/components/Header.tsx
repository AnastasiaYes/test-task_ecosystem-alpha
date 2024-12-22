function Header () {
    return(
        <header className='header'>
            <nav className='header_nav container'>
                <a className='nav_logo'>
                    <strong className='logo_card'>Card</strong>
                    <span className='logo_ify'>ify</span>
                </a>

                <ul className='nav_list'>
                    <li className='nav-list__item'>Products</li>
                    <li className='nav-list__item'>Create</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;