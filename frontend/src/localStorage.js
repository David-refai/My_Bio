export const getMovieItems = () => {
  const movieItem = localStorage.getItem('movieItem')
    ? JSON.parse(localStorage.getItem('movieItem'))
    : [];
  return movieItem;
};


export const setBookingItems = (movieItem) => {
  localStorage.setItem('movieItem', JSON.stringify(movieItem))
}

export const setUserInfo = ({
  _id = '',
  name = '',
  email = '',
  password = '',
  token = '',
  isAdmin = false,
}) => {
  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      _id,
      name,
      email,
      password,
      token,
      isAdmin,
    })
  );
};
export const clearUser = () => {
  localStorage.removeItem('userInfo');
};

export const getUserInfo = () => {
  return localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : { name: '', email: '', password: '' };
};


export const getPayment = () => {
  const payment = localStorage.getItem('payment')
    ? JSON.parse(localStorage.getItem('payment'))
    : {
        paymentMethod: 'paypal',
      };
  return payment;
};
export const setPayment = ({ paymentMethod = 'paypal' }) => {
  localStorage.setItem('payment', JSON.stringify({ paymentMethod }));
};

export const getSeat = () => {
  const Seats = localStorage.getItem('Seats')
    ? JSON.parse(localStorage.getItem('Seats'))
    : [];
  return Seats;
};

export const setSeats = (seats) => {
  localStorage.setItem('seats', JSON.stringify(seats))
}
export const cleanCart = () => {
  localStorage.removeItem('cartItems');
};