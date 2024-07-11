import { useCallback, useState, useRef, useEffect } from 'react'
import Button from './Components/button';

export default function App() {
//  let [color , updateColor] = useState("lightgray");
  let passwordRef = useRef();
  let ramgeRef = useRef();
    let [length , setLength] = useState(0)
    let [numberAllowed, setNumberAllowed] = useState(false);
    let [characterAllowed, setCharacterAllowed] = useState(false);
    let [password, setPassword] = useState("");

    // do callback dont run for very first render
    const passwordGenerator = useCallback(()=>{
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const number = '0123456789';
      const specialChar = '@#$%^&*()_+~|}{[]></-=';
      let pass = "";

      if(numberAllowed) str += number;
      if(characterAllowed) str += specialChar

      for(let i = 0; i<length; i++){
        pass += str[Math.floor(Math.random() * str.length)]
      }

      setPassword(pass);

      console.log("hitted");

    }, [length, numberAllowed, characterAllowed, setPassword])

    // what is the perpose of givinh a function in the dependencies
  
    useEffect(()=>{
      passwordGenerator();
    },[numberAllowed, characterAllowed, length, passwordGenerator])

   const handleCopy = useCallback(()=>{
        passwordRef.current?.select();

        //selectionRang(0, 9) it let select only given number of characters
        window.navigator.clipboard.writeText(password);
   }, [password]);
  

  return (
    // <div className=' w-full h-screen duration-200' style={{backgroundColor : color }}>
    //   <div className=" flex justify-center flex-wrap fixed bottom-12 inset-x-0 px-2">
    //     <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 ">
    //       <Button color="red" colorFunction={updateColor}>Red</Button>
    //       <Button color="blue" colorFunction={updateColor}>Blue</Button>
    //       <Button color="green" colorFunction={updateColor}>Green</Button>
    //       <Button color="magenta" colorFunction={updateColor}>Magenta</Button>
    //       <Button color="black" colorFunction={updateColor}>Black</Button>
    //       <Button color="orange" colorFunction={updateColor}>Orange</Button>
    //     </div>
    //   </div>
    // </div>
    
    <>
      <h1 className='text-4xl text-center mt-10 mx-2 font-medium'>Password Generater</h1>
      <div className='mt-5 w-fit mx-auto p-4 rounded-lg bg-red-400 pb-8
      '>
        <div className='flex rounded-lg w-[525px] bg-white'>
          <input ref={passwordRef} value={password} className='bg-transparent w-full text-orange-600 font-bold text-xl border-none p-3 outline-none rounded-s-lg ' type="text" />
          <button onClick={handleCopy} className='bg-teal-500 text-white btn p-1 px-3 active:bg-white active:text-black text-xl rounded-e-lg'>copy</button>
        </div>
        <div className='flex gap-3 mt-4'>
          <input ref={ramgeRef} type="range" defaultValue={length} min={0} max={100} onChange={()=>{
            setLength(ramgeRef.current.value)
          }}/>
          <span className='text-teal-800 font-bold'>Length {length}</span>
          <span>
            <input onChange={()=>{setNumberAllowed((prev)=>!prev)}} type="checkbox" name="" id="" />
            <span className='text-teal-800 font-bold mx-1 '>Numbers</span>
          </span>
          <span>
            <input onChange={()=>{setCharacterAllowed((prev)=>!prev)}} type="checkbox" name="" id="" />
            <span className='text-teal-800 mx-1 font-bold'>Special Characters</span>
          </span>
        </div>
        <div className='flex justify-center'>
        {/* <button className='btn bg-teal-500 text-xl  text-black mx-auto mt-4 py-3 px-5 rounded-lg active:bg-black active:text-white'>Regenerate</button> */}
        </div>
        
      </div>
    </>

  )
}

