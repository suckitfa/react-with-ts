import React from 'react'
interface IHelloProps {
    message?:string;
}
// const Hello:React.FunctionComponent<IHelloProps> = (props:IHelloProps) => {
//     return (
//         <h2>{ props.message}</h2>
//     )
// }
const Hello:React.FC<IHelloProps> = (props:IHelloProps) => {
    return (
        <h1>{ props.message}</h1>
    )
}
Hello.defaultProps = {
    message:"Hello World"
}
export default Hello;