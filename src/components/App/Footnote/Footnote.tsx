import { NavLink } from 'react-router-dom';

function Footnote() {
    return(
        <footer className="footer footer-center p-10 bg-darkest text-lightest font-semibold rounded">
            <div className="grid grid-flow-col gap-4">
                <NavLink
                  to="/about" 
                  className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md"
                >
                  Nous Contacter
                </NavLink> 
                <NavLink 
                  to="/FAQ"
                  className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md"
                >
                  FAQ
                </NavLink> 
                <NavLink 
                  to="/CGU"
                  className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md"
                >
                  CGU
                </NavLink> 
                <NavLink 
                  to="/infos"
                  className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md"
                >
                  Informations
                </NavLink>
            </div> 
        </footer>
    );
}

export default Footnote;