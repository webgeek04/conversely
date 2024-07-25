import './App.css';
import Matrix from './components/Matrix';
import { useState } from 'react';

function App() {

  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(0);


  const handleClick = (boxId) => {
    if (count == 8) {
      const updatedMatrix = matrix.map((value, Id) => {
        if (Id === boxId) {
          return 'green';
        }
        else
          return value;
      })
      setMatrix(updatedMatrix);
      const newOrder = ([...order, boxId]);
      setOrder(newOrder)
      newOrder.forEach((id, index) => {
        setTimeout(() => {
          setMatrix(prevMatrix => {
            const newMatrix = [...prevMatrix];
            newMatrix[id] = "orange";
            return newMatrix;
          })

        }, (index + 1) * 500)
      })
    }

    else {
      const updatedMatrix = matrix.map((value, Id) => {
        if (Id === boxId) {
          return 'green';
        }
        else
          return value;

      })

      setMatrix(updatedMatrix);
      setOrder([...order, boxId])
      setCount(count + 1);
    }
  }

  return (
    <div className="App">
      <Matrix matrix={matrix} onClick={handleClick} />
    </div>
  );
}

export default App;
