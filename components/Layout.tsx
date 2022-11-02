import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className="bg-black">
        <Navbar />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout