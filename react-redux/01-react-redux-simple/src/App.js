import store from "./redux/store";

function App() {

  const increment = () => {
    store.dispatch({type:'increment', data:1})
  }

  const decrement = () => {
    store.dispatch({type:'decrement', data:1})
  }

  const show = ()=>{
    console.log('store state', store.getState())
  }

  return (
    <div className="App">
      This is app ...

      <div>
        Count :
      </div>

      <div>
        <button onClick={increment}>increment</button><br />
        <button onClick={decrement}>decrement</button><br />
        <button onClick={show}>show</button><br />
      </div>

    </div>
  );
}

export default App;
