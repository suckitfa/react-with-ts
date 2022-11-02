import React, {useState,useEffect} from 'react'

const MouseTracker:React.FC  = () => {
    const [positions,setPositions] = useState({x:0,y:0})
    useEffect(() => {
        const updateMouse = (e:MouseEvent) => {
            console.log('inner')
            setPositions({x:e.clientX,y:e.clientY})
        }
        document.addEventListener('click',updateMouse)
        return () => {
            document.removeEventListener('click',updateMouse)
        }
    })
    // 这样的话只执行一次
    // useEffect(()=> {

    // },[])
    // 依赖数组中的值的变化，如果数组中的值变化了，则执行useEffect中的回调
    // useEffect(() => {

    // },[someVal])
    return (
        <p>Mouse Postions = X:{positions.x}, Y:{positions.y}</p>
    )
}

export default MouseTracker;