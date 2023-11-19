function Menu(){
    function ety(){
        document.querySelector("#wt").style="display: none";
    }
    return(
        <>
            <div className="relative bg-white xs:w-screen xs:h-screen border-2" id="wt">
                <div className="flex items-center justify-between border-b-2 px-4 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="20" viewBox="0 0 113 36"><path fill="#000f" fill-rule="evenodd" d="M91.505 35.522c-2.96-2.255-5.258-4.926-6.823-7.934-1.57-3.023-2.364-6.257-2.364-9.604 0-3.374.785-6.613 2.341-9.617 1.548-2.99 3.854-5.647 6.846-7.911L92.129 0l.25.338 1.777 2.522-.278.248c-2.508 2.26-4.172 4.438-5.163 6.671-.996 2.228-1.499 4.975-1.499 8.17 0 3.305.52 6.107 1.552 8.33 1.037 2.238 2.683 4.394 4.89 6.397l.498.41-.215.343L92.129 36l-.624-.478zm12.308 0l-.624.478-1.812-2.571-.216-.343.498-.41c2.207-2.003 3.854-4.16 4.89-6.397 1.032-2.223 1.552-5.025 1.552-8.33 0-3.195-.502-5.942-1.498-8.17-.992-2.233-2.656-4.411-5.164-6.671l-.278-.248 1.777-2.522.251-.338.624.456c2.992 2.264 5.298 4.92 6.845 7.911A20.71 20.71 0 0 1 113 17.984c0 3.347-.794 6.581-2.364 9.604-1.566 3.008-3.863 5.679-6.823 7.934zM6.047 18.008c0 2.467.655 4.474 1.97 6.026 1.35 1.57 3.05 2.35 5.1 2.35 2.19 0 3.961-.758 5.312-2.269 1.35-1.57 2.023-3.563 2.023-5.977 0-2.413-.673-4.402-2.023-5.972-1.35-1.533-3.105-2.3-5.258-2.3-2.032 0-3.732.776-5.1 2.327-1.35 1.57-2.024 3.505-2.024 5.815zM20.084 5.215h5.94v25.743h-5.94V28.26c-2.436 2.29-5.056 3.437-7.86 3.437-3.539 0-6.464-1.286-8.779-3.857C1.148 25.216 0 21.936 0 18.008c0-3.857 1.148-7.073 3.445-9.649 2.297-2.57 5.168-3.856 8.623-3.856 2.978 0 5.652 1.231 8.016 3.698V5.215zm13.405.22h5.913v2.3c1.09-1.145 2.037-1.98 2.93-2.277 2.772-.934 6.168-.289 8.927 1.263l-2.4 4.83c-1.122-.807-2.876-1.334-3.944-1.334-3.225 0-5.513 2.715-5.513 7.614v13.347h-5.913V5.435zm40.548.89v5.688c-1.822-2.147-5.913-2.147-7.335-2.147-2.225 0-4.073.785-5.545 2.355-1.471 1.565-2.207 3.532-2.207 5.89 0 2.414.709 4.399 2.126 5.95 1.44 1.548 3.27 2.323 5.496 2.323 1.417 0 5.823-.45 7.465-1.935v5.373c-2.4 1.25-4.8 1.876-7.2 1.876-3.962 0-7.277-1.285-9.937-3.857-2.665-2.593-3.997-5.81-3.997-9.648 0-3.843 1.35-7.082 4.046-9.725 2.7-2.643 6.012-3.965 9.937-3.965 2.525 0 4.908.604 7.15 1.822z"></path></svg>
                    <i className="fa fa-times text-2xl" onClick={ety}></i>
                </div>
                <div className="border-b-2">
                    <button className="text-md font-bold flex justify-between items-center py-4 px-2 pl-4 hover:bg-orange-500 w-full">
                        <span>For Companies</span>
                        <i className="fa fa-angle-down pr-2 text-md"></i>
                    </button>
                    <button className="text-md  font-bold flex items-center justify-between w-full py-4 px-2 pl-4 hover:bg-orange-500">
                        <span>For Developers</span>
                        <i className="fa fa-angle-down pr-2 text-md"></i>
                    </button>
                </div>
                <div className="flex flex-col mt-3 space-y-3 mx-4">
                    <button className="bg-purple-600 rounded-lg p-2 text-white">Hire developers</button>
                    <button className="bg-white text-black rounded-lg border-2 border-black p-2">Find jobs</button>
                    <button className="p-2">Log In</button>
                </div>
            </div>
        </>
    )
}
export default Menu;