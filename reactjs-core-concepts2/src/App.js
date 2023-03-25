import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  return (
    <div className="App">
     <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count , setCount] = useState(1);

  const increaseCount = () => setCount(count+1);
  const decreaseCount = () => setCount(count-1)
  
  /* const increaseCount = () =>{
    const newCount =count + 1;
    setCount(newCount);
  } */

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Products(props){
  return (
    <div className='product'>
      <h2>Name:{props.name}</h2>
      <h3>Price:{props.price}</h3>
    </div>
  )
}

export default App;


 {/*  {
        products.map(product => <Products name={product.name} price={product.price}></Products>)
      } */}

     {/*  <Products name='Iphone' price='321654654'></Products>
      <Products name='Samsung' price='321654654'></Products>
      <Products name='Pixel' price='321654654'></Products>
      <Products name='Nokia' price='321654654'></Products> */}

  /*     const products =[
        {name:'Iphone', price:4654645},
        {name:'Pixel', price:4654645},
        {name:'Nokia', price:4654645},
        {name:'Samsung', price:4654645}
      ] */
