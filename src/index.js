import './style.css';

const list = document.querySelector('.item-list');
// const clear = document.querySelector('.fa-sync');
const input = document.querySelector('.todoInput');

// classes 

// const CHECK = "fa-check-square";
// const UNCHECK = "fa-square";
// const LINE_THROUGH = "lineThrough";



function addToDo(toDo){
           const item = `<li class="rows"
                          <div class="left"><i class="far fa-square">
                           </i> ${toDo} </div>
                         <i class="fa fa-ellipsis-v"></i>`
                  const position = "beforeend";
                  list.insertAdjacentHTML(position,item);
      }

      // document.addEventListener('keydown', (event) => {
      //   if (event.keyCode === 13) {
      //     pushToDo();
      //   }
      // });

input.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    const toDo = input.value;
    console.log(input);
    if(toDo){
      console.log('Input Entered');
      addToDo(toDo);
    }
    input.value = "";
  }
})


// window.onload = addToDo("Drink Coffee");