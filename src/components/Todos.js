import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/todosActions';

const Todos = () => {

    const dispatch = useDispatch();
    const {todos, isLoading, error} = useSelector((state) => state);
    useEffect(() => {
        dispatch(getAllTodos());
        
    }, []);
  return (
    <div>
      <h2>Todos App</h2>
      { isLoading && <h3>Loading....</h3> }
      { error && <h3>{error.message}</h3>}
      <section>
        {todos && todos.map((todo) => {
            const {id, title} = todo
            return <article key={id}>
                <h4 className='title'>{title}</h4>
                </article>
        })}
      </section>
    </div>
  )
}

export default Todos
