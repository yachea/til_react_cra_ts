import { useState } from 'react';
import TodoList from './components/todos/TodoList';
import TodoWirte from './components/todos/TodoWirte';
import { ITodoType, TodoType } from './types/todoType';


function App(): JSX.Element {
  // ts 자리

  // 여기에 목록 데이터를 보광해야 함.
  // {id: "", title: "", completed: false}
  const [todos, setTodos] = useState<(TodoType | ITodoType)[]>([]);

  // todos 를 업데이트 하는 함수
  const handleTodoUpdate = (): void => {
    // setTodos
  };
  // todo 목록에서 실행할 함수들
  const onToggle = (): void => {};
  const onDelte = (): void => {};
  const onEdit = (): void => {};

  // tsx 자리
  return (
    <div>
      <h1>할일 앱서비스</h1>
      <div>
        <TodoWirte setTodos={setTodos} handleTodoUpdate={handleTodoUpdate} />
        <TodoList todos={todos} onToggle={onToggle} onDelte={onDelte} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default App;
