import Hello from "./components/Hello";
import Welcome from './components/Welcome'
import axios from 'axios'

function loadData(){
  console.log('load data')

  axios.get('/api/api/Shixi_Static/jobDegree').then(
    response => {console.log('成功了',response);},
    error => {console.log('失败了',error);}
  )

}

function App() {
  return (
    <div className="App">
      This is app ....
      <Hello/>
      <Welcome/>
      <button onClick={loadData}>load data</button>
    </div>
  );
}

export default App;
