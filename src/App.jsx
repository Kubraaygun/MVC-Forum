import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPostController from "./pages/ListPostPage/ListPostController";


function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<ListPostController/>}/>
</Routes>
</BrowserRouter>

  )
}

export default App;