import { TodoType } from '../../types/todoType';

type TodoWirteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: () => void;
};

function TodoWirte({ setTodos, handleTodoUpdate }: TodoWirteProps) {
  return <div>TodoWirte</div>;
}

export default TodoWirte;
