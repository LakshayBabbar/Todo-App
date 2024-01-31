import './TodoList.css';
import TodoListItems from './TodoListItems';

export default function TodoList(props) {
    
    return (
        <div className='todoLists'>
            {props.elements.map((elements, index) =>
                <TodoListItems key={Math.random()}
                    id={index}
                    title={elements.title}
                    desc={elements.desc}
                    selectItem={props.idSelector} />
            )}
        </div>
    );
}