import { useState, useEffect } from 'react'

export default function Practice() {
  const [hello, setHello] = useState(0)
  const [ hello2, setHello2] = useState(0)
  
  const click = () => {
    setHello(hello + 1)
  }

  useEffect( () => {
    if(hello %2 === 0){
      setHello2(1)
    } else {
      setHello2(0)
    }
  }, [hello])
  return(
    <>
      <h1>{ hello }</h1>
      <h2> { hello2 }</h2>
      <btn onClick={click}>click me</btn>
    </>
  )
}