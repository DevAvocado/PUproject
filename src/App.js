import './App.css';
import {useState} from 'react';

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const pushToArray = (value) => {
    if (value.trim().length) {
      setItems([...items, value.trim()]);
      setItem('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') pushToArray(item);
  };

  const removeItemFromList = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-inputs">
          <input
            autoFocus
            placeholder="Add course name here"
            value={item}
            onChange={e => setItem(e.target.value)}
            onKeyPress={e => handleKeyPress(e)}
            />
          <button onClick={e => pushToArray(item)}>+</button>
        </div>

        <ol>
          {
            items.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item}</span>
                  <button className="App-tick" onClick={() => removeItemFromList(index)}>✅</button>
                </li>
              );
            })
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
