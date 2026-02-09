import {useEffect,useState} from "react";
function B() {

const [post,setpost]=useState({});
 const ans=async () => {
    const res1=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const res2=await res1.json();
    setpost(res2);
  }
    useEffect(() => {
      const response=async()=>{
        ans();
      }
      response();
    }, [])
    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/todos/1").then(async(res)=>{
    //     const response=await res.json();
    //     setpost(response);
    //   })
    // }, [])
    
  return (
    <> 
    <p>The current value:{post.title}</p>
    </>
  )
}


export default B