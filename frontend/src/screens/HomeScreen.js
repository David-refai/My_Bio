
import axios from 'axios';
import Rating from '../components/Rating'
import { hideLoading, showLoading } from '../utils';


const HomeScreen = {
    render: async () => {
       // showLoading();
        //  It is proporty of data file, there it save all movie's data
      
        const response = await axios({
            url: "http://localhost:5000/api/movies",
             headers: {
                'Content-Type': 'application/json',
             },
        });
        hideLoading();
         if(!response || response.statusText !== 'OK'){
             return `<div> Error in getting data </div>`
         }
        // call response thst json return promis 
        const movies = response.data;
        
        return `
        <ul class="products">
        ${movies.map(movie => `
        <li>
        <div class="product">
        <a href="/#/movie/${movie._id}">
        <img class="img1" src="${movie.image}" alt="movie 1">
     </a>
     <div class="product-name">
         <a href="/#/movie/1">
         ${movie.name}
     </a>
     </div>
     
     <div class = "movie-rating">
     ${Rating.render({
         value: movie.rating,
         text: `${movie.rating} Rating`,
     })}
     </div>
        <div class="product-brand">
        ${movie.brand}
         </div>
     <div class="product-time">
         ${movie.time}
        </div>
    </div>
        </li>    
            
        `).join('')}
        
        `
     }
     
 };

 export default HomeScreen;