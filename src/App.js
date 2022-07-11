import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
  <>
    <Navbar title="WordCounter" />
    <Textbox heading="Enter Your Text..." outputmsg="Total Words: " />
  </>
  );
}

export default App;
