import { useState} from 'react'

function useToggleHook(boolean) {
  const [on, setOn] = useState(boolean)
  const [show1, setShow1] = useState(boolean)
  const [show2, setShow2] = useState(boolean)
  const [show3, setShow3] = useState(boolean)

  function toggle(){
    setOn(prevOn => !prevOn)
  }
  
  function toggle1(){
    setShow1(prevShow1 =>  !prevShow1)
  }

  function toggle2(){
    setShow2(prevShow2 =>  !prevShow2)
  }
  function toggle3(){
    setShow3(prevShow3 =>  !prevShow3)
  }

  return [
    on, toggle,
    show1, toggle1,
    show2, toggle2,
    show3, toggle3,
  ]
}

export default useToggleHook 

