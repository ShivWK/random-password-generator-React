import './button.css';
export default function Button(props){
    return (
    <button onClick={()=>{
        props.colorFunction(props.color)}} style={{backgroundColor : props.color}} className=" mine outline-none px-8 py-4 rounded-full text-white shadow-lg active:bg-black ">{props.children}</button>
    );    
}

// When you pass props.colorFunction(props.color) directly to the onClick prop, it immediately invokes the function when the component renders, rather than when the button is clicked. This is why you're getting a warning and why the behavior is not as expected.

// In React, you should pass a function reference to onClick instead of calling the function immediately. If you want to pass parameters to the function, you can use an arrow function to wrap the call. Here's how to do it correctly:

//means now onClick has a function which is an arrow function and when it get click it call that arrow function, inside which we have a to colorFunctio() with arguned

//Yes, that's correct. When you use an arrow function in the onClick handler, you're essentially defining a new function that will be executed when the click event occurs. Inside this arrow function, you call the actual function (colorFunction) with the required arguments. This approach ensures that the colorFunction is called only when the button is clicked, not immediately when the component renders.