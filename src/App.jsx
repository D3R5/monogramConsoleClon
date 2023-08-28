import './App.css'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Pag1 from './components/pag1/Pag1'
import ProductList1 from './components/pag2/productlist/ProductList'
import Image from './components/midimage/Image'

function App() {
  return (
    <div className='art'>
      <Nav />
      <Pag1 />
      <ProductList1 />
      <Image />
      {/* <Footer /> */}
    </div>
  )
}

export default App
