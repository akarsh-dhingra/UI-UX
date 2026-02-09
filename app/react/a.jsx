import {useEffect,useState} from react;
function App() {
  const [a,setA]=useState(0);

  useEffect(()=>{
    console.log("Runs on every render that happens");
  });
  // It will already be printed twice first when the component mounts and secondly when the 
  // from the time when the component re-renders
  return (
    <> 
    <p>The current value:{a}</p>
    <button onClick={()=>{setA(a+1)}} >++</button>
    </>
  )
}
// O/p
    //  Runs on every render that happens  On mount run 
    //4 Runs on every render that happens then run on every re-render
export default App;