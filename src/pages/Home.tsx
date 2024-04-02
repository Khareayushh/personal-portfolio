import { Github } from "lucide-react"
import Navbar from "../components/Navbar"
import profile from "../assets/profile.jpg"
import amz_clo from "../assets/amazon-clone.webp"
import Product from "../components/Product"
import Skills from "../components/Skills"

const Home = () => {
  return (
    <div className="w-full pl-[260px]">
      <Navbar />
      <div className="text-white">
        <div className="mainhero p-4 w-full">
          <div className="main bg-[url('./assets/banner.jpg')] bg-cover  w-full bg-no-repeat">
            <div className="flex px-8 py-4 bg-transparent items-center gap-10 bg-blur backdrop-filter backdrop-blur-md">
              <div className="rounded-full border-4 overflow-hidden">
                <img src={profile} alt="" className="w-[150px] overflow-hidden" />
              </div>
              <div className="details flex items-center w-full justify-between bg-transparent">
                <div className="bg-inherit">
                  <p className="font-bold text-4xl bg-inherit">Ayushh Khare</p>
                  <p className="text-lg pt-1 bg-inherit ">@khareayushh</p>
                </div>
                <a href="#" className="flex gap-2 p-2 bg-[#1c1b23] rounded-lg">
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
            <Product name="Amazone Clone" img={amz_clo} stack="Nextjs, React, Firebase, Node, Express" />
            <Product name="Amazone Clone" img={amz_clo} stack="Nextjs, React, Firebase, Node, Express" />
            <Product name="Amazone Clone" img={amz_clo} stack="Nextjs, React, Firebase, Node, Express" />
            <Product name="Amazone Clone" img={amz_clo} stack="Nextjs, React, Firebase, Node, Express" />
          </div>
        </section>

        <section className="skills mt-8 text-white">
          <p className=" flex items-center text-[#e4e4e7] text-xl font-bold pb-4">Skills <span className="font-normal text-2xl p-1">/</span> What I Know</p>
          <div className="grid grid-cols-4 gap-2">
            
            <Skills />
            <Skills />
            <Skills />
            <Skills />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
