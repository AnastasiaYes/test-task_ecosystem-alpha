import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ProductsMain from "./pages/ProductsMain.tsx";
import CreateProduct from "./pages/CreateProduct.tsx";
import ProductInformation from "./pages/ProductInformation.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
            <Header />
                <Routes>
                    <Route path='/' element={<ProductsMain />} />
                    <Route path='/products' element={<ProductsMain />} />
                    <Route path='/create-product' element={<CreateProduct />} />
                    <Route path='/products/:id' element={<ProductInformation />} />
                </Routes>
            <Footer />
            </Router>
        </>
    );
}

export default App;

