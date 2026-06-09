const NavBar = ({ isSignedIn, onRouteChange }) => {
    return (
        <nav className="navbar">
            {isSignedIn && (
                <span className="navbar-link" onClick={() => onRouteChange('signout')}>Sign Out</span>
            )}
        </nav>
    );
};

export default NavBar;