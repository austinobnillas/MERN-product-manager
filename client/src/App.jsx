import './App.css';
import ProductForm from './components/Form'
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne'
import UpdateForm from './components/UpdateProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/products' element={<>
            <ProductForm allProducts={allProducts} setAllProducts={setAllProducts}/>
            <DisplayAll allProducts={allProducts} setAllProducts={setAllProducts}/>
            </>}/>
          <Route path='/products/:id' element={<DisplayOne/>}/>
          <Route path='/products/edit/:id' element={<UpdateForm/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
