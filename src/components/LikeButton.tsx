import React,{useState,useEffect} from "react";
const LikeButton:React.FC = () => {
    // const [likeObj,setLikeObj] = useState({like:0,on:true})
    const [like,setLike] = useState(0)
    const [on,setOn] = useState(true)
    const message = on === true ? 'ON' : "OFF"
    // 默认：第一次渲染和每次渲染之后都执行
    useEffect(() => {
        window.document.title = `点击了:${like}次`
    })
    return (
        <>
            <button onClick={() => {setLike(like+1)}}>{like}👍🏻</button>
            <button onClick={() => {setOn(!on)}}>{message}</button>
        </>
    )
}

export default LikeButton;