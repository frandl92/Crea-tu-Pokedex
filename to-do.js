const input$$ = document.querySelector("input")
const button$$ = document.querySelector("button")
const ul$$ = document.querySelector("ul")

// console.log(input$$.value)




// crear una funcion que cree 3 elementos y darle contenido del input.

const creation = () => {
    const li$$ = document.createElement("li")
    const button1$$ = document.createElement("button")
    const p1$$ = document.createElement("p")

    p1$$.innerText = input$$.value;

    li$$.appendChild(p1$$)
    li$$.appendChild(button1$$)
    ul$$.appendChild(li$$)
    
    const borrar = (event) => {
        event.remove()
    }
    button1$$.addEventListener('click', ()=>borrar (li$$));

}


button$$.addEventListener('click', creation);









// const main$$ = document.querySelector('main');



// const toDO$$ = document.querySelector('.write-task');
// const myBtn$$ = document.querySelector("button");

// var click = function (event) {
//   main$$.appendChild(event);
// };

// if (toDO$$.value !== '') {
//   const myDiv1$$ = document.createElement('div');
//   myDiv1$$.innerText = toDO$$;

//   main$$.appendChild(myDiv1$$);
//   myBtn$$.addEventListener('click', ()=> click(myDiv1$$));
 
// }





// document.getElementById("add-task").addEventListener("click", click);
