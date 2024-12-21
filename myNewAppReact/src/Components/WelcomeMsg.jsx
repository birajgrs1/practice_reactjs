import TodoItemsContext from "../store/contexts/todo-items-context";
import { useContext } from "react";

const WelcomeMsg = () =>{
    const {todoItems} = useContext(TodoItemsContext);
    return todoItems.length ===0 && <h5><i>Enjoy Your day 😊😊😊!!!</i></h5>

}
export default WelcomeMsg;