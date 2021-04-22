import { getMovieItems } from "./localStorage";

export const parseRequsetUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    // get access to resource in APP and ID that user enter in the bar
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};

export const rerender = async (component) => {
    document.getElementById('main-container'
    ).innerHTML = await component.render();
    await component.after_render();
}

export const showLoading = () => {
  document.getElementById('loading-overlay').classList.add('active');
};

export const hideLoading = () => {
  document.getElementById('loading-overlay').classList.remove('active');
};
export const showMessage = (message, callback) => {
  document.getElementById('message-overlay').innerHTML = `
  <div>
    <div id="message-overlay-content">${message}</div>
    <button id="message-overlay-close-button">OK</button>
  </div>
  `;
  document.getElementById('message-overlay').classList.add('active');
  document
    .getElementById('message-overlay-close-button')
    .addEventListener('click', () => {
      document.getElementById('message-overlay').classList.remove('active');
      if (callback) {
        callback();
      }
    });
};
//check Booking Item
export const redirectUser = () => {
 // console.log(getMovieItems().length);
  if (getMovieItems().length !== 0) {
    document.location.hash = '/payment';
  } else {
    document.location.hash = '/';
  }
};