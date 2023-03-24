import './App.css';
import myapi from './data';




const Box = (props) => {
  const {quote,author} = props;
  return(
    <section className='body'>
      <h1 className='quote'>{quote}</h1>
      <h6 className='author'>{author}</h6>
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
