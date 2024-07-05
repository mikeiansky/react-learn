import Counter from './containers/Counter'
import store from './redux/store';

function App() {


  return (
    <div className="App">
      This is app ...

      <Counter store={store}/>
    </div>
  );
}

export default App;
