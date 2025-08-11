import { TodoType } from '@/types/todoType';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: string) => void;
  onDelte: (id: string) => void;
  onEdit: () => void;
};

const TodoItem = ({ todo, onToggle, onDelte, onEdit }: TodoItemProps) => {
  // 수정은 별도의 입력창 구성으로 수정 후 값만 업데이트
  const handleEdit = () => {
    console.log('여기에서 내용을 수정하는 기능 작성 후 완료된 데이터 전송');
    onEdit();
  };
  // css 객체 만들기 (css타입을 지정하면 css가 자동으로 나온다.)
  const liStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    color: todo.completed ? 'gray' : 'red',
    textDecoration: todo.completed ? 'line-through' : 'none',
  };

  return (
    <li style={liStyle}>
      <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
      <span>{todo.title}</span>
      <button onClick={onEdit}>수정</button>
      <button onClick={() => onDelte(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
