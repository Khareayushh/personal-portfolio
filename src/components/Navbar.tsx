import { User } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="flex justify-end p-4 text-white text-sm px-8 sticky top-0 z-20">
            <a href="#" className="px-2 py-1 hover:bg-green-500 duration-300 bg-green-400 rounded-lg text-sm flex items-center gap-2" >
                <p className="bg-inherit ">Contact Me</p>
                <User className="bg-inherit text-sm" />
            </a>
        </nav>
    )
}

export default Navbar
