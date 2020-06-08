
export class Todo {

    static fromJson ({ tarea, id, completado, creado }){

        const tempTodo = new Todo( tarea );

        tempTodo.id = id;
        tempTodo.tarea = tarea;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    } 

    constructor( tarea ) {
        this.tarea = tarea;
        this.id    = new Date().getTime();//12135465
        this.completado = false;
        this.creado = new Date();
    }

    imprimir() {
         console.log(`${ this.tarea } - ${this.id}`);
    }

}