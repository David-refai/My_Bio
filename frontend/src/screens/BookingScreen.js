import { getMovie } from "../api";
 import { getMovieItems, setBookingItems } from "../localStorage";
import { parseRequsetUrl, rerender } from "../utils";


const addToBooking = (item, forceUpdate = false) => {
   let movieItem = getMovieItems();
  const existItem = movieItem.find(x => x.movie === item.movie);
  if (existItem) {
    if (forceUpdate) {
      movieItem = movieItem.map((x) =>
        item.movie === existItem.movie ? item : x
      );
    }
  }
  else {
     movieItem = [item];
   }
  
  //update localStorage
  setBookingItems(movieItem);
  if (forceUpdate) {
     rerender(BookingScreen);
  }
 };

const removeFromBooking = (id) => {
  setBookingItems(getMovieItems().filter(x => x.movie !== id));
  if (id === parseRequsetUrl().id) {
    document.location.hash = '/booking';
  } else {
    rerender(BookingScreen);
  }
};   

const BookingScreen = {
  after_render: () => {
  // const qtySelects = document.getElementsByClassName('qty-select');
  //   Array.from(qtySelects).forEach((qtySelect) => {
  //     qtySelect.addEventListener('change', (e) => {
  //       const item = getMovieItems().find((x) => x.movie === qtySelect.id);
  //       addToBooking({ ...item, qty: Number(e.target.value) }, true);
  //     });
  //   });
    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', () => {
        removeFromBooking(deleteButton.id);
      });
    });
    document.getElementById('checkout-button').addEventListener('click', () => {
      document.location.hash = '/seats';
    });
    
  },
  render: async () => {
    const request = parseRequsetUrl();
    if (request.id) {
      const movie = await getMovie(request.id);
     
      
      addToBooking({
        movie: movie._id,
        name: movie.name,
        image: movie.image,
        price: movie.price,
        Appropriate: movie.Appropriate,
        qty: 1
      });
    }
    const movieItem = getMovieItems();
     $(function () {
            $('#datetimepicker1').datetimepicker({minDate:new Date()});
     });
     
    

    return`
    <div class=" content booking">
      <div class="booking-list">
        <ul class="booking-list-container">
          <li>
            <h3>Booking</h3>
           
          </li>
          ${
               movieItem.length === 0
              ? '<div>Cart is empty. <a href="/#/">Go Shopping</a>'
              : movieItem
                  .map(
                    (item) => `
            <li>
              <div class="cart-image">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="cart-name">
                <div>
                  <a href="/#/product/${item.product}">
                    ${item.name}
                  </a>
                </div>
                <div>
                
                  </select>
                  <button type="button" class="delete-button" id="${
                    item.movie
                  }">
                    Delete
                  </button>
                </div>
              </div>
              
          
            </li>
             <div class="cart-action">
          <button id="checkout-button" class="primary fw">
            Book your seat!
          </button>
         
      </div>
            `
                  )
                  .join('\n')
          } 
         </ul>
      </div>
     
      
      
    </div>
`
  }
};

export default BookingScreen;