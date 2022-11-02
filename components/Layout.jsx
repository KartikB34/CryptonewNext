import Landing from "./Landing"
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div className="bg-black">
        <Navbar />
        <Landing />
        <div>
            {children}
        </div>
    </div>
  );
}

export default Layout