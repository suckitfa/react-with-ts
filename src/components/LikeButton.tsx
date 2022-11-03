import React,{useState,useEffect, useRef} from "react";
import useMousePositionHook from "../hooks/useMousePosition";
const LikeButton:React.FC = () => {
    // const [likeObj,setLikeObj] = useState({like:0,on:true})
    const [like,setLike] = useState(0)
    const [on,setOn] = useState(true)
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const {x,y} = useMousePositionHook()
    const message = on === true ? 'ON' : "OFF"
    // 默认：第一次渲染和每次渲染之后都执行
    useEffect(() => {
        console.log('document title effect is running !')
        window.document.title = `点击了:${like}次`
    },[like])

    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is updated')
        } else {
            didMountRef.current = true;
        }
    })

    const handleFocus = () => {
        inputRef.current?.focus()
    }
    // 测试看能够获得最新的state值
    // 不能够获得最新的值
    // const handleAlertClick = () => {
    //     setTimeout(() => {
    //         alert('You clicked on ' + like)
    //     },3000)
    // }
    // 能够获取到最新的值，修改ref的值，不会引发组件的值
    const handleAlertClick = () => {
        setTimeout(() => {
            alert('You clicked on ' + likeRef.current)
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
            <input type="text" ref={inputRef} />
            <button onClick={handleFocus}>Focus Input!</button>
            <button onClick={() => {setLike(like+1);likeRef.current++;}}>{like}👍🏻</button>
            <button onClick={handleAlertClick}>Alert</button>
        </>
    )
}

export default LikeButton;