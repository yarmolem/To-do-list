import { Todo } from '../classes';
import { todoList } from '../index';

const ListHTML = document.querySelector('.todo-list');
const txtinput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const aFiltros = document.querySelectorAll('.filtro')


export const crearItemHtml = (todo) => {

    const htmlTodo = `
    <li class="${ todo.completado ? 'completed' : '' }" data-id="${ todo.id }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ todo.completado ? 'checked' : '' }>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
    </li>`;
    
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    ListHTML.append(div.firstElementChild);
    return div;
};


txtinput.addEventListener('keyup', (event)=> {
    
    if( event.keyCode === 13 && txtinput.value.length > 0 ){
        const item = new Todo( txtinput.value );
        todoList.nuevoTodo(item);
        crearItemHtml(item);
        txtinput.value = '';
        console.log(todoList);
    }

});

ListHTML.addEventListener('click', ( event )=> {
    const nombreElemento = event.target.localName;
    const todoElemento   = event.target.parentElement.parentElement;
    const todoID         = todoElemento.getAttribute('data-id')

    if( nombreElemento.includes('input') ){

        todoList.marcarCompletado( todoID );
        todoElemento.classList.toggle('completed');

    }else if( nombreElemento.includes('button') ){

        todoList.eliminarTodo(todoID);
        todoElemento.remove();
    }
    
});

btnBorrar.addEventListener('click', ()=> {

    todoList.eliminarCompletado();

    for (let i = ListHTML.children.length-1; i >= 0  ; i--) {
        const elemento = ListHTML.children[i];

        if( elemento.classList.contains('completed') ){
            ListHTML.removeChild(elemento);
            // todoList.eliminarCompletado();
        }
        
    }


});

ulFiltros.addEventListener('click', (event)=> {

    const filtro = event.target.text;
    if ( !filtro ){  return; }

    
    aFiltros.forEach(elem => elem.classList.remove( 'selected' ))
    event.target.classList.add( 'selected' );

    // tratar de colocar la clase hidden

    for( const elemento of ListHTML.children ) {
        
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes': 
            if ( completado ) {
                elemento.classList.add('hidden');
            }
            break;

            case 'Completados': 
            if ( !completado ) {
                elemento.classList.add('hidden');
            }
            break;
        }


    }
    
    

})