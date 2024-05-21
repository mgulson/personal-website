import { useState } from "react"


export default function Demo(){

  const [count, setCount] = useState(0)

  const [hello, setHello] = useState(0)

  async function handleClick(){
    let result = await fetch("https://coding-languages.fly.dev/languages").then(
      (response) => response.json()
    )

    console.log(result)
  }

  function handleClickHello(){
    hello ? setHello(0) : setHello(1)
  }

  return(
    <>
    <h1>Demo</h1>
    <button onClick={handleClick}>count</button>
    <button onClick={handleClickHello}>hello</button>
    {count}
    {
      hello ?
      <>
      hello
      </>:
      <></>
    }
    </>


  )

}