type TodoItemProps = {
  onToggle: () => void;
  onDelte: () => void;
  onEdit: () => void;
};

const TodoItem = ({ onToggle, onDelte, onEdit }: TodoItemProps) => {
  return <div>TodoItem</div>;
};

export default TodoItem;
