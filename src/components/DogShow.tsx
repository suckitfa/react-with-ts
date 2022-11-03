import React from 'react'
interface IShowResult {
    message:string;
    status:string;
}
const DogShow:React.FC<{data:IShowResult}> = ({data}) => {
    return (
        <>
            <h2>Dog show: {data.status}</h2>
            <img src={data.message} alt="狗狗图片" />
        </>
    )
}

export default DogShow;