import Image from "next/image";
import Bio  from '@/components/cards/bio.js'
import WorkingOn  from '@/components/cards/working-on.js'
import Contact from "@/components/cards/contact.js";
import Projects from "@/components/cards/projects";


export default function Home() {
  return (
    <div class="d-flex flex-column justify-content-center w-100 h-100 ">
      <div class="d-flex flex-column justify-content-center align-items-center ">
      </div>
      {/* <div class="gradient"></div> */}
      <div className="grid auto-rows-[80px] grid-cols-3 gap-4 px-64 py-12 ">
      <Bio />
      <WorkingOn />
      <Contact />
      <Projects />
      {/* Projects */}
      <div className={`row-span-3 col-span-2 rounded-xl border border-slate-400/80 p-4 bg-slate-900`}></div>
      {/* Life */}
      <div className={`row-span-2 rounded-xl border border-slate-400/80 p-4 bg-slate-900`}></div>
      {/* Cert */}
      <div className={`row-span-2 rounded-xl border border-slate-400/80 p-4 bg-slate-900`}></div>
      {/* Articles */}
      <div className={`row-span-2 col-span-2 rounded-xl border border-slate-400/80 p-4 bg-slate-900`}></div>
      {/* Tech Stack */}
      <div className={`row-span-2 rounded-xl border border-slate-400/80 p-4 bg-slate-900`}></div>
  </div>
    </div>

  );
}
