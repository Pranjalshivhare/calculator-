import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// const myfirstelement = <h1>hello react</h1>

// ReactDOM.render(myfirstelement,document.getElementById('root'));

// //class

// class Car {
//   constructor(name){
//     this.brand = name;
//   }

//   present() {
//     return 'i have a ' + this.brand;
//   }
// }

// class Model extends Car {
//   constructor(name,mod) {
//     super(name);
//     this.model = mod;
//   }

//   show(){
//     return this.present() + 'it is a' + this.model;
//   }
// }

// const mycar = new Car("ford");
// mycar.present();

// //arrow function
// //before
// hello = function(){
//   return "hello world";
// }

// hello = () => {
//   return "hello world";
// }

// //works only if function have only one statment
// hello = () => "hello world";

// //with parameters
// hello = (val) => "hello" + Val;

// //array
 
// const myArray = ['a','b','c'];
// const myList = myArray.map((item) => <p>{item}</p>)

// const vehicles = ['m','f','e'];
// const car = vehicles[0];
// const [car,truck,suv] = vehicles;


// function  calculate(a,b){
//   const add = a+b;
//   const sub = a-b;

//   return [add,sub];
// }

// const [add,sub] = calculate(4,5);

// //class component
// class Car extends React.Component {
//   render() {
//     return <h2>hii</h2>;
//   }
// }

// //function component
// function Car() {
//   return <h2>hii</h2>;
// }


// //rendering a component
// reactDom.render(<Car/>,document.getElementById('root'));


// function car() {
//   return <h2>pranjal</h2>;
// }

// function Garage() {
//   return (
//     <>
//       <h1>who</h1>
//       <car/>
//     </>
//   )
// }