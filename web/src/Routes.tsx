import { Router, Route, Set } from '@redwoodjs/router'
import NavbarLayout from 'src/layouts/NavbarLayout/NavbarLayout'
import HomePage from 'src/pages/HomePage/HomePage'
import ProductsPage from 'src/pages/ProductsPage/ProductsPage'
import TechnologyPage from 'src/pages/TechnologyPage/TechnologyPage'
import AboutPage from 'src/pages/AboutPage/AboutPage'
import ContactPage from 'src/pages/ContactPage/ContactPage'


const Routes = () => (
  <Router>
    <Set wrap={NavbarLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/products" page={ProductsPage} name="products" />
      <Route path="/technology" page={TechnologyPage} name="technology" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/contact" page={ContactPage} name="contact" />
    </Set>
    <Route notfound page={HomePage} />
  </Router>
)

export default Routes