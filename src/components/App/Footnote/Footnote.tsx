function Footnote() {
    return(
        <footer className="footer footer-center p-10 bg-darkest text-lightest font-semibold rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md">Nous Contacter</a> 
                <a className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md">FAQ</a> 
                <a className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md">CGU</a> 
                <a className="hover:bg-lightest hover:text-darkest px-2 py-2 rounded-md">Informations</a>
            </div> 
        </footer>
    );
}

export default Footnote;