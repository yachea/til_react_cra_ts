import { act, useContext } from 'react';
import { TodoActionContext, TodoStateContext } from './TodoProvider';

export function useTodosState() {
  const state = useContext(TodoStateContext);
  if (!state) {
    throw new Error('액션이 없습니다.');
  }
  return state;
}

// 액션 전용 Context 사용
export function useTodosActions() {
  const actions = useContext(TodoActionContext);
  if (!actions) {
    throw new Error('액션이 없습니다.');
  }
  return actions;
}
