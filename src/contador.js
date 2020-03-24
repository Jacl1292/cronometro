import React from 'react';
const Contador = (props) => {
  
  return (

    <div className="container justify-content-center" id="reloj">
      <div className="row justify-content-center " >
        <i className="far fa-clock mr-2 col-1 rounded"></i>
        <div className=" mr-2 col-1 rounded text-center" >{props.counter5}</div>
        <div className=" mr-2 col-1 rounded text-center" >{props.counter4}</div>
        <div className=" mr-2 col-1 rounded text-center" >{props.counter3}</div>
        <div className=" mr-2 col-1 rounded text-center" >{props.counter2}</div>
        <div className=" mr-2 col-1 rounded text-center" >{props.counter1}</div>
        <div className=" mr-2 col-1 rounded text-center" >{props.counter}</div>
      </div>
    </div>

  );
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

export default Contador;