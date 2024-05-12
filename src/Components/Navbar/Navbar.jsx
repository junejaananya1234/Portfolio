import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Navbar(){
    return(
   <>
   <div>
    <div className="container m-auto">
      <div className="flex justify-between">
        <div>
            <h1 className="font-bold text-xl text-white">&lt; Ananya Juneja &gt;</h1>
        </div>
        <div>
            <ul className="flex gap-3">
                <li>
                    <a className="text-gray-400 text-lg hover:text-white cursor-pointer">About</a>
                  
                </li>
                <li>
                    <a className="text-gray-400 text-lg hover:text-white cursor-pointer">Skills</a>
                  
                </li>
                <li>
                    <a className="text-gray-400 text-lg hover:text-white cursor-pointer">Projects</a>
                  
                </li>
                <li>
                    <a className="text-gray-400 text-lg hover:text-white cursor-pointer">Education</a>
                  
                </li>
                <li>
                    <a className="text-gray-400 text-lg hover:text-white cursor-pointer">Content</a>
                  
                </li>
            </ul>
            
        </div>
        <div>
            <ul className="flex gap-3">
                <li>
                    <a className="text-gray-400">
                    <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a className="text-gray-400">
                    <FaFacebook />
                    </a>
                </li>
                <li>
                    <a className="text-gray-400">
                    <FaInstagramSquare />
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
   </div>
   </>
    )
}

export default Navbar;