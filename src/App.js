import ReduxApp from './redux/ReduxApp'
import ReduxSageApp from './redux-saga'

function App() {
  return (
      <div>
          <div>hello world</div>
          <ReduxApp/>
          <ReduxSageApp/>
          <div>change me</div>
      </div>
  );
}

export default App;
