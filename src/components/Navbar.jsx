export default function Navbar(){
    return(
        <>
        <div className="w-full bg-white shadow-sm px-10 py-0 flex justify-between items-center mx-0">
        <div>
            <h1 className="text-2xl font-medium text-gray-700 cursor-pointer">CS-Ticket System</h1>
        </div>
        <div className="flex justify-between items-center">
            <ul className="menu menu-horizontal text-gray-600">
            <li className="hover:font-medium transition-[0.5s]"><a>Home</a></li>
            <li className="hover:font-medium transition-[0.5s]"><a>FAQ</a></li>
            <li className="hover:font-medium transition-[0.5s]"><a>Changelog</a></li>
            <li className="hover:font-medium transition-[0.5s]"><a>Blog</a></li>
            <li className="hover:font-medium transition-[0.5s]"><a>Download</a></li>
            <li className="hover:font-medium transition-[0.5s]"><a>Contact</a></li>
            </ul>
            <button className="btn ml-2 font-medium bg-gradient-to-br from-purple-700 via-purple-500 to-blue-500 border-0 shadow-none hover:bg-linear-to-tl transition-[0.5s]">+ New Ticket</button>
        </div>
        </div>
        </>
    )
}