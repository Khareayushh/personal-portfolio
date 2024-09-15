import { Github } from "lucide-react"
import Navbar from "../components/Navbar"
import profile from "../assets/profile.jpg"
import task from "../assets/task.png"
import act from "../assets/activity.png"
import favgif from "../assets/Fav Gifs.png"
import personaAI from "../assets/Persona AI.png"
import Product from "../components/Product"
// import Skills from "../components/Skills"

const Home = () => {
  return (
    <div className="w-full pl-[260px]">
      <Navbar />
      <div className="text-white">
        <div className="mainhero p-4 w-full">
          <div className="main bg-[url('./assets/banner.png')] bg-cover  w-full bg-no-repeat">
            <div className="flex px-8 py-4 bg-transparent items-center gap-10 bg-blur backdrop-filter backdrop-blur-md">
              <div className="rounded-full border-4 overflow-hidden">
                <img src={profile} alt="" className="w-[150px] overflow-hidden" />
              </div>
              <div className="details flex items-center w-full justify-between bg-transparent">
                <div className="bg-inherit">
                  <p className="font-bold text-4xl bg-inherit text-black">Ayushh Khare</p>
                  <p className="text-lg pt-1 bg-inherit text-slate-700 ">@khareayushh</p>
                </div>
                <a href="https://github.com/Khareayushh" target="_blank" className="flex gap-2 p-2 bg-[#1c1b23] rounded-lg">
                  <Github className="bg-inherit" />
                  Follow me on Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 ml-8">
        <section className="project">
          <p className="text-[#e4e4e7] text-xl font-bold pb-6">Projects</p>
          <div className=" grid grid-cols-4 gap-4 max-xl:grid-cols-4 max-lg:grid-cols-3">
            <a href="https://persona-pi.vercel.app/" target="_blank">
              <Product name="Persona AI" img={personaAI} stack="A personality identifier of the person who wrote the story." />
            </a>
            <a href="https://fav-giphy.vercel.app/" target="_blank">
              <Product name="Favorite-Gifs" img={favgif} stack="Built a full-stack GIF search and favoriting app using Giphy API, Firebase Auth, and Firestore, with 30% improved data storage efficiency." />
            </a>
            <a href="https://github.com/Khareayushh/Github-Activity-CLI" target="_blank">

              <Product name="GitHub Activity Tracker" img={act} stack="CLI tool for GitHub activity with Caching for fast and efficient updates." />
            </a>
            <a href="https://ak-tdo.netlify.app/" target="_blank">

              <Product name="Task Tracker" img={task} stack="An interactive website for being accountable for daily tasks." />
            </a>
          </div>
        </section>

        <section className="skills mt-8 text-white">
          <p className=" flex items-center text-[#e4e4e7] text-xl font-bold pb-4">Skills <span className="font-normal text-2xl p-1">/</span> What I Know</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="skills_comp p-4 bg-[#1c1b23] rounded-lg *:bg-transparent">
              <p className="text-[#8b8a91] font-bold text-xl pb-2">Frontend</p>
              <div className="skills_cont *:bg-[#14131a] *:px-2 *:py-1 *:rounded-lg flex flex-wrap gap-2">
                <div className="">HTML</div>
                <div>CSS</div>
                <div className="border-[1px] border-blue-500">Tailwind</div>
                <div className="border-[1px] border-slate-300">JavaScript</div>
                <div className="border-[1px] border-blue-500">TypeScript</div>
                <div className="border-[1px] border-orange-500">React JS</div>
                <div className="border-[1px] border-green-500">Next.JS</div>
              </div>
            </div>
            <div className="skills_comp p-4 bg-[#1c1b23] rounded-lg *:bg-transparent">
              <p className="text-[#8b8a91] font-bold text-xl pb-2">Backend</p>
              <div className="skills_cont *:bg-[#14131a] *:px-2 *:py-1 *:rounded-lg flex flex-wrap gap-2">
                <div className="border-[1px] border-green-500">Node.JS</div>
                <div className="border-[1px] border-orange-500">Express JS</div>
              </div>
            </div>
            <div className="skills_comp p-4 bg-[#1c1b23] rounded-lg *:bg-transparent">
              <p className="text-[#8b8a91] font-bold text-xl pb-2">Database</p>
              <div className="skills_cont *:bg-[#14131a] *:px-2 *:py-1 *:rounded-lg flex flex-wrap gap-2">
                <div className="border-[1px] border-blue-300">MySql</div>
                <div className="border-[1px] border-green-500">MongoDB</div>
                <div className="border-[1px] border-blue-500">PostgreSQL</div>
                <div className="border-[1px] border-green-500">Supabase</div>
                <div className="border-[1px] border-orange-500">Firebase</div>
              </div>
            </div>
            <div className="skills_comp p-4 bg-[#1c1b23] rounded-lg *:bg-transparent">
              <p className="text-[#8b8a91] font-bold text-xl pb-2">DevOps</p>
              <div className="skills_cont *:bg-[#14131a] *:px-2 *:py-1 *:rounded-lg flex flex-wrap gap-2">
                <div className="border-[1px] border-purple-500">Git</div>
                <div>Github Actions</div>
                <div className="border-[1px] border-blue-700">AWS</div>
                <div className="border-[1px] border-yellow-700">Docker</div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
