import Counter from './Components/Counter';
import Message from './Components/Message';
import Water from './Components/Water';

function App() {
  return (
    <div className="App">
      <Water/>

      <br/>
      <br/>

      <Counter initCount={5}/>

      <br/>
      <br/>

      <Message isVisible={true} color="tomato">
          <h2>Hallo!!</h2>
          <i>Hallo, ich bin eine Nachricht</i>
      </Message>
    </div>
  );
}

export default App;
