import './Box.css';

const Box=({value, onClick})=>{

    const style= value? `box  ${value}`: "box";

    return(
        <>
            <button className={style} onClick={onClick}></button>
        </>
    )
}
export default Box;