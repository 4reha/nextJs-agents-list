import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const Layout = ({children}: any) => {
  return (
     <div className="content">
        <NavBar />
        {children}
        <Footer />
   </div>
  )
}
