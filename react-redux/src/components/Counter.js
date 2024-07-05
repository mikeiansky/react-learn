 

function Counter({count, increment, decrement}) {

  // console.log('count ui count', count, increment, decrement)

  const inc = () => {
    increment(1)
  }

  const dec = () => {
    decrement(1)
  }

  const show = ()=>{
     
  }

  return (
    <div className="App">
      <div>
        Count : {count}
      </div>
      <div>
        <button onClick={inc}>increment</button><br />
        <button onClick={dec}>decrement</button><br />
        <button onClick={show}>show</button><br />
      </div>

    </div>
  );
}

export default Counter;
