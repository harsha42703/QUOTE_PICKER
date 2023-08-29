import './App.css';
import myapi from './data';
import React, { useState } from 'react';


//---------------------------------


const QuotesComponent = ({ quote }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(quote);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="quotes-component">
      <p className="quote">{quote}</p>
      <button className={`copy-button ${isCopied ? 'copied' : ''}`} onClick={handleCopyClick}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};




//---------------------------------

const Box = (props) => {
  const {quote,author} = props;
  return(
    <section className='body'>
      <h1 className='quote'>{quote}</h1>
      <h6 className='author'>{author}</h6>
    </QuotesComponent>
    </section>

  );
}


function App() {
  return (
    <div className='main'>
    <div className="App">
      <header className='head'><h1>quote picker</h1></header>
        {myapi.map((eachObj) => {
          const {id,quote,author} = eachObj;
        return(
          <div className='container'>
          <Box id={id} quote={quote} author={author}/>
          </div>
        );
        })}
    </div>
    </div>
  );
}

export default App;
