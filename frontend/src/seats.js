
const todoInput = document.querySelector('.todo-input');
const todoBotton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')



//Event Listeners
document.addEventListener("DOMContentLoaded", getTodo);
todoBotton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Function
function addTodo(event) {
  //Prevent Forom from submitting
  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo");
  //Create Li
  const newTodo = document.createElement("li")
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // ADD TODO TO LOCALSTORAGE
  savLocalTodo(todoInput.value)
  // Check MARCK button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Check TRACH button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = `<i class = "fas fa-trash"></i>`;
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  // Append To List
  todoList.appendChild(todoDiv);
  //Cleat Todo  INPUT value
  todoInput.value = "";
}
// function that delete a item from list 
function deleteCheck(e) {
  const item = e.target;
  //Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    //function that remove a item from localStorage when 
    // user delete 
    removeLocalStorge(todo);
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  // CHECK mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed")
  }
}

// Filter that show which is completed or not ...
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = 'flex'; // if we write block may do mass in felt bettween button ckeck an trash 
        break;
      case "completed":
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = "none"
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

// function to do save 
function savLocalTodo(todo) {
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}


// todo save into LocalStarge 
function getTodo() {
  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(function (todo) {

    //Todo Div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo");

    //Create Li
    const newTodo = document.createElement("li")
    newTodo.innerHTML = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check MARCK button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check TRACH button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class = "fas fa-trash"></i>`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append To List
    todoList.appendChild(todoDiv);

  });
}
  
function removeLocalStorge(todo) {

  if (localStorage.getItem('todos') === null) {
    todos = [];

  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerHTML;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos))
}



$('.minus, .plus').click(function (e) {
  e.preventDefault();
  var $input = $(this).siblings('.value');
  var val = parseInt($input.val(), 10);
  $input.val(val + ($(this).hasClass('minus') ? -1 : 1));
});





$(document).ready(function () {
  var max_fields = 10; //maximum input boxes allowed
  var wrapper = $(".input_fields_wrap"); //Fields wrapper
  var add_button = $(".add_field_button"); //Add button ID


  var x = 1//initlal text box count
  $(add_button).click(function (e) { //on add input button click

    // e.preventDefault();
    if (x < max_fields) { //max input box allowed
      x++; //text box increment
      let v = ($(".value").val());
      for (let index = 0; index < v.length; index++) {

        console.log(v)


        let options = ["Barn: 65kr", "Normal: 85kr", "Pensionär: 75kr"];
        let pri = ""


        $(wrapper).append(`<div><input type="text"  name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>`);

        $(wrapper).append(`<div id = "price"><a href="#" class="remove_field">Remove</a> <select>
      <option  >Select one option</option></div> ${options.map(m => `<option>${m}</option>`)}
      </select>`)

      }
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    e.preventDefault(); $(this).parent('div').remove(); x--;
  })
});

allNameVals = [];
allNumberVals = [];

allSeatsVals = [];

function clickForBooking() {
  if ($("input:checked").length == ($("#Numseats").val())) {
   // $("#btn-colc").click(function () {
         
    
      $('input:checked').prop('disabled', true);
    
   
      $('.seats:checked').each(function () {
        allSeatsVals.push($(this).val());
      });

      //Storing in Array
      allNameVals.push($("#Username").val());
      allNumberVals.push($("#Numseats").val());


      //Displaying 
      $('#nameDisplay').val(allNameVals);
      $('#NumberDisplay').val(allNumberVals);
      $('#seatsDisplay').val(allSeatsVals);
    }
    else {

        alert("Please select " + $("#Numseats").val() + " seats")

  }
    

}
      // var i = document.getElementById("seatsDisplay").innerText;
      // function addtocart() {
      //   i++;
      //   document.getElementById('seatsDisplay').innerText = i;
      // }



      $('input:checkbox').click(function () {

        if ($("input:checked").length == ($("#Numseats").val())) {

          $('input:checked').prop('disabled', true);
          $(':checkBox').prop('disabled', false);


        }

        else {
          $(":checkbox").prop('disabled', false);
          $('input:checked').prop('disabled', true);
        }



      }

      );
    
  




    // var i = document.getElementById("seatsDisplay").innerText;
    // function addtocart() {
    //   i++;
    //   document.getElementById('seatsDisplay').innerText = i;
    // }



    $('input:checkbox').click(function () {

      if ($("input:checked").length == ($("#Numseats").val())) {
        $('input:checked').prop('disabled', true);
     


      }

      else {
        $(":checkbox").prop('disabled', false);
        $('input:checked').prop('disabled', true);
      }



    });
  

// local Storge 
let seat = JSON.parse(localStorage.getItem('seat')) || [];

let boxss = JSON.parse(localStorage.getItem('boxss')) ||[]
function addInfo() {

  let plats = []
  

 // const addMovie = (ev) => {
    'use strict';
    let b = "";
  allSeatsVals.forEach(function (seatss) {
    b = b + " " + seatss;
  });
     //to stop the form submitting
    let antal = document.getElementById('Numseats').value;
    let price = document.getElementById('price:selected');
    let seats = {
      id: Date.now(),
      Name: document.getElementById('Username').value,
      Antal: document.getElementById('Numseats').value,
      Price: price * antal,
      Plats: b,
      Ticket: $("#price:selected").text()
      
   
    }
  const inn =  this.querySelector(['input:chcked'].value)
    var lengthBox = {
    done: false,
    inn
  };
    //this.reset(); // for empty all input 
  
  boxss.push(lengthBox)
  seat.push(seats);
  console.warn('added', { boxss });

  let pre = document.querySelector('#msg pre');
  //pre.textContent = '\n' + JSON.stringify(seat, '\t', 2);
  pre.textContent = '\n' + JSON.stringify(boxss, '\t', 2);
  //saving to localStorage
  //localStorage.setItem('todo', JSON.stringify(seat));

  console.log('This is after the write call');



  document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btn-colc').addEventListener('click', addInfo);

  });
  
  
  localStorage.setItem('seat', JSON.stringify(seat));
  //localStorage.setItem('boxss', JSON.stringify(boxss));
  populaetList(boxss, setsItem)
    document.forms[0].reset();
    // to clear the form for the next entries
    //document.querySelector('form').reset();
}
  
    
  function populaetList(plats = [], platses) {
   
    platses.innerHTML = Plats.map((plat, i) => {
      return `
      <li>
      <input type= 'checkbox' data-index=${i} id= "item" ${plat.done ? checked:' '}
      </li>
      `
    });
    document.getElementsByClassName('seats')
  }


let checkboxs = document.querySelector("input[type=checkbox]");

function toggelDone(e) {
  if (!e.target.matches('input:checked')) return;
  let el = e.target;
  let index = el.dataset.index;
  for (let index = 0; index < boxss.length; index++) {
    
    
  }
  console.log(boxss[index].done)

  //localStorage.setItem('seat', JSON.stringify(seat));
    console.log("hiiiiiiii");
  }
checkboxs.addEventListener('click', toggelDone);
var checkbox = document.querySelector("input[type=checkbox]");

$("input[type=checkbox]").on('change', function () {
  if (this.checked) {

    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});


  
  //for display purposes only
  console.warn('added', { seat });

  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(seat, '\t', 2);

  //saving to localStorage
  //localStorage.setItem('todo', JSON.stringify(seat));

  console.log('This is after the write call');



document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('btn-colc').addEventListener('click', addInfo);
  
});

// function removeElement(seats) {
//   $("#btn-remove").click(() => {
//     for (let seats = 0; seats < seat.length; seats++) {
//       const element = seat[seats];
//     }


//     seat.pop(seats);
//     pre.innerHTML = ""
//     console.log('This is removed');
//   }
//   );
// }

function cartNumber() {
  let checkValue = localStorage.getItem('cartNumber');

  console.log(checkValue);

}


// function saveCh() {
//   const checkbox = document.getElementById('seats');
//   localStorage.setItem('seats', checkbox.checked);
//   console.log("it is saving");
// }
// function loadCh() {
//   const checked = JSON.parse(localStorage.getItem('seats'));
//   document.getElementById('seats').checked = checked;
//   console.log("it is loading");

// }


var mainDiv = document.querySelector(".main");
var checkBoxes = document.querySelectorAll("input[type=checkbox]");

document.forms[0].addEventListener("change", storeCheckData);

function storeCheckData() {


    
    // localStorage.setItem("checked tab", JSON.stringify({ position: i }));
  }
    



function loadCheckData() {
  var checkedTab = JSON.parse(localStorage.getItem('seat'));
  console.log(checkedTab);
  if (checkedTab != null) {
    for (var i = 0; i < $("input:checked").length; i++) {
      $("input:checked").checked = localStorage.getItem($("input:checked").value) ===`true`?true:false
      console.log("it is loading");
        document.getElementById("seat").checked = checkedTab;
    }
  }
;
}

// loadCheckData();


// const container = document.querySelector('.container')
// const seats = document.querySelectorAll('.row .seats:not(.occupied)');
// //const count = document.getElementById('count');
// //const total = document.getElementById('total');
// const movieSelect = document.getElementById('price');

// populateUI();

// let ticketPrice = +movieSelect.value;

// // Save selected movie index and price
// function setMovieData(movieIndex, moviePrice) {
//   localStorage.setItem('selectedMovieIndex', movieIndex);
//   localStorage.setItem('selectedMoviePrice', moviePrice);
// }

// // Update total and count
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll('.row .seats.checked');

//   const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seats));

//   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

//   const selectedSeatsCount = selectedSeats.length;

//   //count.innerText = selectedSeatsCount;
//   //total.innerText = selectedSeatsCount * ticketPrice;

//   //setMovieData(movieSelect.selectedIndex, movieSelect.value);
// }

// // Get data from localstorage and populate UI
// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classList.add('selected');
//       }
//     });
//   }

//   const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

//   if (selectedMovieIndex !== null) {
//     movieSelect.selectedIndex = selectedMovieIndex;
//   }
// }

// // Movie select event
// // movieSelect.addEventListener('change', e => {
// //   ticketPrice = +e.target.value;
// //   setMovieData(e.target.selectedIndex, e.target.value);
// //   updateSelectedCount();
// // });

// // Seat click event
// container.addEventListener('click', e => {
//   if (
//     e.target.classList.contains('seats') &&
//     !e.target.classList.contains('occupied')
//   ) {
//     $(':checkbox').each(function () { this.checked = !this.checked; });

//     updateSelectedCount();
//   }
// });

// // Initial count and total set
// updateSelectedCount();

