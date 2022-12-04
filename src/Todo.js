import React from 'react'
import'./todo.css';
function Todo  ()  {
	const [todos, setTodos] = React.useState([]);
	const [todo, setTodo] = React.useState('');
	const [isAdd, setIsAdd] = React.useState(true);
	const [index, setIndex] = React.useState(null);

	const edit =(e,todoData,i) =>{
	e.preventDefault();
	setIsAdd(false);
	setTodo(todoData)
	setIndex(i);
	console.log(todo);
	}

	const addTodo = (e) => {
		e.preventDefault();
		let todoObj = {
			id: Math.random(),
			todo: todo,
			date:Date.now()
		}
		setTodos([todoObj, ...todos])
		setTodo('')
		console.log(todos);
		
	}

	const editTodo = () => {
		let data = todos.map((res,i)=>{
			if(i === index){
				todos[index].todo = todo;
			}
			return res;
		})

		setTodos(data);
		setTodo('');
	}
	

  return (
    <>
<div className="container">
		<h2>TODO LIST</h2>
		<h3 >Add Item</h3>
		<p>
			<input id="new-task" value={todo} placeholder="Enter todo" onChange={(e)=>setTodo(e.target.value)}  type="text"/>
			<button onClick={(e)=> isAdd ? addTodo(e): editTodo()} > {isAdd ? 'add todo': 'edit'}</button>
		</p>

		<h3>Todo</h3>
		<ul id="incomplete-tasks">
			{
				todos.map((res,i)=>{    
					return ( 
						<li key={res.id}><input type="checkbox"/><label> {res.todo}</label><input type="text"/>
						 <button onClick={(e)=>
						 {edit(e,res.todo, i)}}>Edit</button>
						<button >Delete</button></li>

					)
				})
			}
		</ul>
	</div>

    </>
  )
}

export default Todo