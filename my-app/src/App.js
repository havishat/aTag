import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Button from './Button'


function App() {
  return (
    <Button as={Link} to="https://stackoverflow.com/questions/75728532/uncaught-typeerror-cannot-destructure-property-basename-of-react2-usecontext">Home</Button>
  );
}

export default App;
