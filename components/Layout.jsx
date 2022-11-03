import Landing from "./Landing"
import Navbar from "./Navbar"
import Faq from "./faq/Faq"
import Sponsor from "./sponsor/Sponsor"
import Prizes from "./prizes/Prizes"

const Layout = ({children}) => {
  return (
    <div className="bg-[#1E1E1E]">
        <Navbar />
        <Landing />
        <Faq />
        <Sponsor />
        <Prizes />
        <div>
            {children}
        </div>
    </div>
  );
}

export default Layout