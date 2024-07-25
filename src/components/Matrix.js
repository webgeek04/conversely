import './Matrix.css';
import Box from './Box';

const Matrix = ({matrix, onClick}) => {

    return (
        <div className='matrix'>
            {
                matrix.map( (value, Id) => {
                    return <Box value={value} onClick={() => value=== null && onClick(Id)}/>
                })}
        </div>
    )
}
export default Matrix;