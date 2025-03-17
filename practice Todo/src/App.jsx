import AddTodo from "./components/AddTodo"
import TodoListing from "./components/TodoListing"


function App() {


  return (
    <>
      <div className="contentContainer" >
        <AddTodo />
        <TodoListing/>
      </div>
    </>
  )
}

export default App
