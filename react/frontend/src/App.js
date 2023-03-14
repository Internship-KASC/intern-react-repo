import './App.css';
// import { Button } from '@chakra-ui/react'
import { Route } from "react-router-dom";
import Homepage from './Homepage';
import Chatpage from './Chatpage';


function App() {
  return (
    <div className='App'>
      {/* <Button colorScheme='blue'>Button</Button> */}
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
