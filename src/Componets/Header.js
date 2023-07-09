import '../Style/style.css'
const Header = () => {
    return ( 
    <div id='top'>
   <header>
        <div class="logo">
           
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="#Home" class="active">Home</a></li>
                <li><a href="#Packages">Packages</a></li>
                <li><a href="#About">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#popular">popular</a></li>
                <li><a href="#Review">Reviews</a></li>
            <button className='bookbtn'> <a href="#Book Now">Book Now</a></button>
            </ul>
          
        </nav>
        <div class="fas fa-bars"></div>
    </header>
   


    </div>
     );
}
 
export default Header;