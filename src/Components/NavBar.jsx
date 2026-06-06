const NavBar = ({ isSignedIn, onRouteChange }) => {
    return (
        <nav className="flex justify-end p-4 shadow-lg">
            {isSignedIn && (
                <p className="text-xl hover:opacity-50 underline cursor-pointer" onClick={() => onRouteChange('SignOut')}>Sign Out</p>
            )}
        </nav>
    );
};

export default NavBar;