import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   var products = [
        {name:'Photoshop',price: '$66.99'},
        {name:'Illustrator', price:'$40.45'},
        {name:'Photopea', price:'$30.69'},
        {name:'PDF Reader', price:'$12.23'},
        {name:'priemer El', price:"$230.34"}
     ];         
     var nyoks = ['Habu','rajjak','alomgir','salman','shuvo','sakib'] ;

     var friends = [
      {id:'01', name:'Sumon Paul',mobile:'01641579936'},
      {id:'02',name:'Hasan',mobile:'01917184820'}
     ];


    
  return (
    <div className="App">
      <header className="App-header">
        <p>I Am A Reack person</p>
         <Counter></Counter>
         {
            friends.map(fd => <Friends friend = {fd} ></Friends>)
         }
         <ul>
        {
          nyoks.map(nyok => <li>{nyok}</li>)
        }
         {
           products.map(pd => <li>{pd.name} : {pd.price}</li>)
         }
        </ul>
         
        {
           products.map(product => <Product product={product}></Product>)
          }
        <p>creat react app</p>
        <Person name="Sultan Mahmud" job="King" details="soltan mahmd is a great men"></Person>
      </header>
    </div>
  );
}
 var style = {
   border:'2px solid yellow',
   width:'500px',
   margin:'10px',
   borderRadius:'10px'
 }

  // creat a componet function 
 function Person(probs){
   return (
      <div style={style}>
        <h1>Name:{probs.name}</h1>
        <h2>Job:{probs.job}</h2>
         <p>{probs.details}</p>
      </div>
   )
 }

  // creat a component 
  function Product(probs){
     var productStyle = {
       border: '2px sollid gray',
       backgroundColor:'lightgray',
       height: '200px',
       width: '200px',
       margin:'10px',
       borderRadius: '10px',
       float: 'left'
     }
       const {name, price} = probs.product; // data descturig
    return (
      <div style = {productStyle}>
          <h3>{name}</h3>
            <h2>{price}</h2>
            <button>Buy Now</button>
      </div>
    )
  }

   // creat componet friends details 
    function Friends(probs){
      var FriendsStyle = {
        border: '2px sollid gray',
        backgroundColor:'lightgray',
        height: '250px',
        width: '250px',
        margin:'10px',
        borderRadius: '10px',
        float: 'left',
        color:'black'
      } 
       const {name , id , mobile} = probs.friend; // data destructuring
       return (
          <div style ={FriendsStyle}>
              <h3>Name: {name}</h3>
              <h4>Id: {id}</h4>
              <h4>Mobile: {mobile}</h4>
              <button>Deatils</button>
          </div>
       )
    }
    
     //creat useSate mathod
      function Counter(){
         const [count , setCount] = useState(10);
         const handleIncress = () => {
            setCount(count + 1);
        
       };
        return (
          <div>
             <h1>Count:{count}</h1>
             <button onClick = {() => setCount(count - 1)}>Decress</button>
             <button onClick={handleIncress}>Incree</button>
          </div>
        )
      }
       
export default App;
