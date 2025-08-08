// 1. type 으로 함.
export type TodoType = { id: string; title: string; completed: boolean };
// 2. interface 로 함. 객체일때 interface가 나음
export interface ITodoType {
  id: string;
  title: string;
  completed: boolean;
}
