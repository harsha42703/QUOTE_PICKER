import './App.css';
import myapi from './data';
import React,{useState} from 'react';

const Box = (props) => {
  const { quote, author } = props;
  const [copy, setCopy] = useState(false);

  const handleCopyClick = () => {
    setCopy(true);
    navigator.clipboard.writeText(quote);
  };

  return (
    <section className='body'>
      <h1 className='quote'>{quote}</h1>
      <h6 className='author'>-{author}</h6>
      <button
        className='cpy-btn'
        onClick={handleCopyClick}
      >
        {copy ? " Copied! " : "Copy"}
      </button>
    </section>
  );
};

function App() {
  return (
    <div className='main'>
      <div className='App'>
        <header className='head'>
          <h1>Quote picker</h1>
        </header>
        {myapi.map((eachObj) => {
          const { id, quote, author } = eachObj;
          return (
            <div className='container' key={id}>
              <Box quote={quote} author={author} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
