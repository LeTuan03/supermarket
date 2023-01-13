import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from 'react-use-cart'

import { publicRouters } from "./routes";
import DefaultLayOut from "./components/Layout/DefaultLayOut";

function App() {
  return (
   <CartProvider>
      <div className="App">
          <BrowserRouter>
            <Routes>
                {publicRouters.map((route, index)=> {
                  const Page = route.component
                  return <Route key={index} 
                                path={route.path} 
                                element={
                                <DefaultLayOut>
                                  <Page/>
                                </DefaultLayOut>
                                } />
                })}
            </Routes>
          </BrowserRouter>
        </div>
   </CartProvider>
  );
}

export default App;
