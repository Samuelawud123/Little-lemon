import  Logo from './images/Logo.svg';
function Nav() {
    return (
     <div>
        <div>
        <img src={Logo} alt="Little Lemon Logo" />
        </div>
        <div>
            <ul>
                <li> <a href="/"> Home </a> </li>
                <li> <a href="/"> About </a> </li>
                <li> <a href="/"> Menu </a> </li>
                <li> <a href="/"> Reservation </a> </li>
                <li> <a href="/"> Order Online </a> </li>
                <li> <a href="/"> Log In </a> </li>
            </ul>
        </div>
    </div>
    );
}
export default Nav;