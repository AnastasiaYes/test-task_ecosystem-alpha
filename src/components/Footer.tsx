function Footer () {
    const year = new Date().getFullYear();
    return(
        <footer className='footer'>
            <div className='container'>
                <a className='nav_logo'>
                    <strong className='logo_card'>Card</strong>
                    <span className='logo_ify'>ify</span>
                </a>
                <p className='copyright'>&copy; <span id="year">{year}</span> frontend-dev.com.</p>
            </div>
        </footer>
    )
}

export default Footer;