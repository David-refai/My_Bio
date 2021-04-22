import { getUserInfo } from '../localStorage';

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return ` <nav>
                <input type="checkbox" id="check">
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <label class="logo"><a class="logo"  href="/">BIO.</a></label>
                <ul class="navbar">


                    <li><a class="navbarli" href="/">Movie</a></li>
                    
                    <li><a class="navbarli" href="/#/About">About us</a></li>
                    <li><a class="navbarli" href="/#/covid">Covid-19</a></li>
                    
    

             
     
   <li><a class="navbarli" href="/#/booking">Booking</a></li>
    ${isAdmin ? `<li><a href="/#/dashboard">Dashboard</a></li>` : ''}
     ${
    name
      ? `<li><a href="/#/profile">${name}</a></li>`
      : `<li><a class="navbarli" href="/#/signin">Sign-In</a></li> `
  }
     </ul>
   </nav>
  `;
  },
  after_render: () => {},
};
export default Header;