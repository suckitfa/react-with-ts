import React,{useState} from "react";
const LikeButton:React.FC = () => {
    // const [likeObj,setLikeObj] = useState({like:0,on:true})
    const [like,setLike] = useState(0)
    const [on,setOn] = useState(true)
    const message = on === true ? 'ON' : "OFF"
    return (
        <>
            <button onClick={() => {setLike(like+1)}}>{like}👍🏻</button>
            <button onClick={() => {setOn(!on)}}>{message}</button>
        </>
    )
}

export default LikeButton;