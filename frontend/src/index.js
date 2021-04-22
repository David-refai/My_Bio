import Header from './components/Header.js';
import BookingScreen from './screens/BookingScreen.js';
import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js';
import MovieScreen from './screens/MovieScreen.js';
import PaymentScreen from './screens/PeymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrder.js';
import ProfileScreen from './screens/ProfileScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import SeatScreen from './screens/SeatScreen.js';
import SigninScreen from './screens/siginScreen.js';
import { hideLoading, parseRequsetUrl, showLoading } from './utils.js';

// route all pages 
const routes = {
    '/': HomeScreen,
    '/movie/:id': MovieScreen,
    '/booking/:id': BookingScreen,
    '/booking/': BookingScreen,
    '/signin': SigninScreen,
    '/register': RegisterScreen,
    '/profile': ProfileScreen,
    '/seats': SeatScreen,
    '/payment': PaymentScreen,
    '/placeorder':PlaceOrderScreen,

};
const router = async () => {
   // showLoading();
    const request = parseRequsetUrl();
    const parseUrl =
        (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
   if (await screen.after_render) await screen.after_render();
    hideLoading();
};


window.addEventListener('load', router);
window.addEventListener('hashchange', router);