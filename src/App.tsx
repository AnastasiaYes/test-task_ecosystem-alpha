import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ProductsMain from "./pages/ProductsMain.tsx";
import CreateProduct from "./pages/CreateProduct.tsx";
import ProductInformation from "./pages/ProductInformation.tsx";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <BrowserRouter basename={import.meta.env.BASE_URL}>
                    <Routes>
                        <Route path='/' element={<ProductsMain/>}/>
                        <Route path='/products' element={<ProductsMain/>}/>
                        <Route path='/create-product' element={<CreateProduct/>}/>
                        <Route path='/products/:id' element={<ProductInformation/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;

