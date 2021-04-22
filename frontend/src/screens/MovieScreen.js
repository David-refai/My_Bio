import { hideLoading, parseRequsetUrl, showLoading } from '../utils'
import { getMovie } from '../api'
import Rating from '../components/Rating'





const MovieScreen = {
    after_render: () => {
        const request = parseRequsetUrl();
        document.getElementById('add-button').addEventListener('click', () => {
            document.location.hash = `/booking/${request.id}`;
        });
  
},

    render: async () => {
        const request = parseRequsetUrl();
        showLoading();
        const movie = await getMovie(request.id);
        if (movie.error) {
            // it is coming from api.js
             return `<div>${movie.error}</div>`;
        }
        hideLoading();
        return `
<div class="banner">
         <div class="back-to-result">
             <a href="/#/"> Back to result </a>
         </div>
            <img class = "bg" src="${movie.cover}" alt="${movie.name}"/>
        
        <div class="details-info">
          <h1> ${movie.name} </h1>
         
          <h4>
          <span>${movie.year}</span>
          <span><i>${movie.Appropriate}+</i></span>
          <span>${movie.category}</span>
          <span>${movie.time}</span>
         </h4>
          <h1> ${Rating.render({ value: movie.rating, text: `${movie.rating} Rating` })}<br>
           <p> Description:<br>${movie.description}</p>
        <div class="btn">
             <button id="add-button" class="primary">Book Now</button>  
        </div>
     </div>
     <button class ="play" id="play-movie" ><i class="far fa-play-circle fa-2x"></i>watch trailer</button>
     <div class="trailer">
    <iframe width="420" height="315"
    src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
     <i class="fal fa-times" id="close"></i>
     </div>
    
</div>`;
    },
};
export default MovieScreen; 