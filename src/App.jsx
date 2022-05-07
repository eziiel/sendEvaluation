import './App.css'
import { MainSub } from './components/mainLayout'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ResponseSub } from './components/response'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path ="/" element ={<MainSub />}> 
        </Route>
        <Route path ="response/*" element ={<ResponseSub />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
