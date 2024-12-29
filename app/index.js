import TodosView from "../app/views/todos/about";
import LoginView from "../app/views/auth/login/about";
import useAuth from "./hooks/useAuth";

export default function Page() {

  const { logged } = useAuth();

  return (
    <>
      { logged === true ? <TodosView /> : <LoginView /> }
    </>
  );
}