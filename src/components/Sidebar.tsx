import { Code, Flame, Github, HomeIcon, Linkedin, Video, X, Youtube } from 'lucide-react'

const Sidebar = () => {
    return (
        <aside className="text-[#8b8a91] text-sm fixed bottom-0 top-0 left-0">
            <div className="flex gap-2 mt-4 ml-4 pl-4">
                <p className="before:content-[''] before:bg-[#2bd576] before:px-[10px] before:rounded-full"></p>
                <p className="before:content-[''] before:bg-[#2bd576] before:px-[10px] before:rounded-full"></p>
            </div>
            <div className="side-sec w-[250px] overflow-y-scroll ml-4 h-[85vh] bg-[#1c1b23] mt-4 rounded-lg">
                <div className="p-4 overscroll-contain bg-[#1c1b23] duration-300 transition-all">
                    <div className="upper-links bg-[#1c1b23] *:bg-[#1c1b23] p-4 py-4 flex flex-col *:py-4">
                        <a href="#" className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                            <HomeIcon />
                            <p>Home</p>
                        </a>
                        <a href="#" className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                            <Flame />
                            <p>Trending</p>
                        </a>
                        <a href="#" className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                            <Code />
                            <p>Snippets</p>
                        </a>
                        <a href="#" className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                            <Video />
                            <p>Vidoes</p>
                        </a>
                    </div>
                    <div className="social_links bg-[#1c1b23]">
                        <p className='font-semibold bg-inherit text-lg'>Socials</p>

                        <div className="upper-links bg-inherit *:bg-inherit p-4 py-4 flex flex-col *:py-4">
                            <a href="https://twitter.com/khareayushh07" target="_blank" className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                                <X className='text-white' />
                                <p>Twitter</p>
                            </a>
                            <a href="https://www.linkedin.com/in/khareayushh/" target='_blank' className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                                <Linkedin className="text-blue-400" />
                                <p>Linkedin</p>
                            </a>
                            <a href="https://github.com/Khareayushh" target="_blank" className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                                <Github className='text-green-400' />
                                <p>Github</p>
                            </a>
                            <a target="_blank" href="https://www.youtube.com/channel/UCTHWpGIVZoCLL6uR7WoqiAA" className="*:bg-inherit flex items-center gap-4 hover:translate-y-[-2px] transition-all duration-300">
                                <Youtube className="text-red-500" />
                                <p>Youtube</p>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar
