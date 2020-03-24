import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

// Custom CSS
import './index.css';

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';




class Counter extends React.Component {
    constructor(props) {
        super(props)
        /* this.state = { contador: 0 }*/
    }
    /*  contadorup = () => {
          console.log(this.state.contador);
          setInterval(() =>
          this.setState({
              contador: this.state.contador + 1
          }), 1000);
      } */

    render() {
        return (

            <div className="container justify-content-center" id="reloj">
                <div className="row justify-content-center " >
                    <i className="far fa-clock mr-2 col-1 rounded"></i>
                    <div className=" mr-2 col-1 rounded text-center" >{this.props.counter5}</div>
                    <div className=" mr-2 col-1 rounded text-center" >{this.props.counter4}</div>
                    <div className=" mr-2 col-1 rounded text-center" >{this.props.counter3}</div>
                    <div className=" mr-2 col-1 rounded text-center" >{this.props.counter2}</div>
                    <div className=" mr-2 col-1 rounded text-center" >{this.props.counter1}</div>
                    <div className=" mr-2 col-1 rounded text-center" >{this.props.counter}</div>
                </div>
            </div>

        )
    }
}


let counter5 = 0;
let counter4 = 0;
let counter3 = 0;
let counter2 = 0;
let counter1 = 0;
let counter = 0;
setInterval(() => {

    ReactDOM.render(<Counter counter={counter}
         counter1={counter1} 
         counter2={counter2} 
         counter3={counter3}
         counter4={counter4}
         counter5={counter5}/>, document.querySelector("#root"));


    counter += 1;
    if (counter === 10) {
        counter = 0;
        counter1 += 1;
        if (counter1 === 10) {
            counter1 = 0;
            counter2 += 1;
            if (counter2 === 10) {
                counter2 = 0;
                counter3 += 1;
                if (counter3 === 10) {
                    counter3 = 0;
                    counter4 += 1;
                    if (counter4 === 10) {
                        counter4 = 0;
                        counter5 += 1;
                        if (counter5 === 10) {
                            counter5 = 0;
                            counter4 = 0;
                            counter3 = 0;
                            counter2 = 0;
                            counter1 = 0;
                            counter = 0;
                        }
                    }
                }
            }
        }
    }
}, 1000)

