import React,{useState,useEffect} from "react";
import useMousePositionHook from "../hooks/useMousePosition";
const LikeButton:React.FC = () => {
    // const [likeObj,setLikeObj] = useState({like:0,on:true})
    const [like,setLike] = useState(0)
    const [on,setOn] = useState(true)
    const {x,y} = useMousePositionHook()
    const message = on === true ? 'ON' : "OFF"
    // 默认：第一次渲染和每次渲染之后都执行
    useEffect(() => {
        console.log('document title effect is running !')
        window.document.title = `点击了:${like}次`
    },[like])

    // 测试看能够获得最新的state值
    // 不能够获得最新的值
    const handleAlertClick = () => {
        setTimeout(() => {
            alert('You clicked on ' + like)
        },3000)
    }
    // function handleAlertClick() {
    //     setTimeout(() => {
    //         alert('You clicked on ' + like)
    //     },3000)
    // }
    return (
        <>
            <h2>x:{x},y:{y}</h2>
            <button onClick={() => {setLike(like+1)}}>{like}👍🏻</button>
            <button onClick={handleAlertClick}>Alert</button>
        </>
    )
}

export default LikeButton;