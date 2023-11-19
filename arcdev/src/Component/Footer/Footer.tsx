function Footer(){
    return(
        <>
            <div className="relative xs:bg-black xs:text-white xs:border-t-2 md:border-t-0 md:pt-0 xs:pt-10">
                <div className="xl:w-8/12 md:pt-8 md:pb-3 md:w-11/12 md:mx-auto md:border-t-2 xs:flex xs:flex-col md:flex-row md:items-center md:justify-between">
                    <div className="xs:flex xs:flex-col md:flex-row md:order-1">
                        <div className="xs:flex xs:items-center xs:justify-center md:order-2 xs:space-x-2 xs:mb-4">
                            <i className="px-3.5 rounded-full fa fa-facebook p-3 bg-white text-black"></i>
                            <i className="px-3.5 rounded-full fa fa-twitter p-3 bg-white text-black"></i>
                            <i className="px-3.5 rounded-full fa fa-linkedin p-3 bg-white text-black"></i>
                            <i className="px-3.5 rounded-full fa fa-youtube p-3 bg-white text-black"></i>
                        </div>
                        <nav className="md:relative md:top-2 md:mr-4">
                            <a className="xs:text-sm px-3 xs:w-4/12" href="" hrefLang="">Cookie Policy</a>
                            <a className="xs:text-sm px-3 xs:w-4/12" href="" hrefLang="">Privacy Policy</a>
                            <a className="xs:text-sm px-3 xs:w-4/12" href="" hrefLang="">Terms of Service</a>
                        </nav>
                    </div>
                    <div className="xs:text-center xs:text-sm xxs:mt-4 xxs:mb-4">Copyright 2023 Arc</div>
                </div>
            </div>
        </>
    )
}
export default Footer;