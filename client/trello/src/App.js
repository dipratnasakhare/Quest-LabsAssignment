import { Box } from '@chakra-ui/react';
import './App.css';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     
     <Navbar />

     <Box backgroundSize={"cover"} bgImage={"https://images.pexels.com/photos/732223/pexels-photo-732223.jpeg?auto=compress&cs=tinysrgb&w=600"} >
      <Home/>
     </Box>
    </div>
  );
}

export default App;
