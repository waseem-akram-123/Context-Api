// import './App.css';
// import Counter from './components/Counter';
// import { useContext } from 'react';
// import { CounterContext } from './context/Counter';

// function App() {

//   const counterState = useContext (CounterContext);
//   console.log (counterState);

//   return (
//     <div className="App">

//       <h1> Count is {counterState.count} </h1>
//       <Counter/>
//       <Counter/>
//       <Counter/>
//       <Counter/>

//     </div>
//   );
// }

// export default App;

import Item from "./components/item";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <h1> Choose the Products </h1>
      <Item name="Coffee" price={2000} />
      <Item name="Badam Juice" price={1000} />
      <Item name="Green Tea" price={500} />
      <Item name="Tea" price={100} />

      <Cart />
    </div>
  );
}
export default App;
