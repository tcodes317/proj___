function Header(){
    return(
        <>
            <div className="relative z-30 xxs:mx-6">
                <div className="flex xs:py-1 justify-between w-full fixed bg-black items-center">
                    <div className="flex items-center">
                        <i className="fa fa-bars xs:p-3 rounded-full text-white xxs:text-2xl"></i>
                        <img src="../../assets/arcdev_logo_icon_168574.png" alt="" className="text-white border-2 xs:ml-3 xs:w-24 xs:h-10" />
                    </div>
                    <div>
                        <button className="bg-purple-500 xs:text-sm p-3 xs:w-11/12 text-white xxs:w-36 rounded-lg font-bold">
                            <span>Hire developers</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;