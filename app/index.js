import { useState } from 'react';
import TodosView from './views/todos/about';

export default function Page() {

  const [ logged, setLogged ] = useState(true);

  return (
    <>
      { logged ? <TodosView /> : "" }
    </>
  );
}