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
    return (
        <p>Mouse Postions = X:{positions.x}, Y:{positions.y}</p>
    )
}

export default MouseTracker;