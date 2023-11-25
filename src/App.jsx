import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeIndexPage from './pages/Home/HomeIndexPage'
import ProductIndexPage from './pages/Product/ProductIndexPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'

import './styles/Main.scss'
import Category from './pages/Category/Category'

/**
 *
 * @returns
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeIndexPage />
  },
  {
    path: '/product/:id',
    element: <ProductIndexPage />
  },
  {
    path: '/cart/:id?',
    element: <Cart />
  },
  {
    path: '/category/:id?',
    element: <Category />
  }
])

/**
 *
 *
 */

function App() {
  const isCartPage = window.location.pathname.includes('cart')

  return (
    <>
      {!isCartPage && <Header />}
      <RouterProvider router={router} />
      {!isCartPage && <Footer />}
      {/* <Router>
      <Switch>
        <Route path="/" exact component={HomeIndexPage} />
      </Switch>
    </Router> */}
    </>
  )
}

export default App
