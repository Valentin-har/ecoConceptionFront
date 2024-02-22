import {NavLink} from "react-router-dom";

const Layout = ({ content , isHomePage}: {content : any, isHomePage: boolean})  => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="h-px-48">
                <nav className="bg-gray-800">
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {!isHomePage && (
                                            <>
                                                <NavLink to="/"
                                                         className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                                    </svg>

                                                </NavLink>
                                                <NavLink to="/crew"
                                                         className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">Equipage</NavLink>
                                                <NavLink to="/character"
                                                         className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">Personnages</NavLink>
                                                <NavLink to="/fruit"
                                                         className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium">Fuits
                                                    du démon</NavLink>
                                            </>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex flex-grow m-4 overflow-y-auto h-full">
                {content}
            </div>
            <footer className="bg-gray-800 text-white py-2 px-8">
                <p className="text-center">© Grand Line 2024</p>
            </footer>
        </div>
    );
};

export default Layout;