
const Skills = () => {
    return (
        <div className="skills_comp p-4 bg-[#1c1b23] rounded-lg *:bg-transparent">
            <p className="text-[#8b8a91] font-bold text-xl pb-2">Heading</p>
            <div className="skills_cont *:bg-[#14131a] *:px-2 *:py-1 *:rounded-lg flex flex-wrap gap-2">
                <div className="">HTML</div>
                <div>CSS</div>
                <div className="border-[1px] border-blue-500">Tailwind</div>
                <div>JavaScript</div>
                <div className="border-[1px] border-blue-500">TypeScript</div>
                <div className="border-[1px] border-orange-500">React JS</div>
                <div className="border-[1px] border-green-500">Next.JS</div>
            </div>
        </div>
    )
}

export default Skills
