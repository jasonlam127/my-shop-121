import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title = 'This is the default title' }) => (
  <div >
    <Header title = {title}/>
    {children}
    <Footer />
  </div>
)

export default Layout