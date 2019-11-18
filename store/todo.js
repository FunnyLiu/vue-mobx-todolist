import { decorate, observable,observe } from "mobx";

export class Todo {
    constructor(text){
        this.text = text;
        this.id = + new Date();
        this.completed = false;
        this.isEditing = false;
    }
}
export const TodoStore = decorate(Todo, {
    text: observable,
    completed: observable,
    isEditing: observable
})