import Link from "next/link"
import Form from "../components/Form"



const Edit = () => {
    const datos = {
        project: "Landing Page",
        description: "Some description",
        projectManager: 1,
        assignedTo: 2,
        status: 0
    }
  return (
    <main className="flex min-h-screen flex-col font-roboto bg-[#F0F2F5]">
      <div className="flex gap-2 shadow-[0px_1px_0px_0px_#D9D9D9] px-4 items-center w-full h-10 top-10 font-inter text-xs" >
        <Link className="flex items-center" href={'/'}><span><svg width="24" height="24" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z" fill="black" fill-opacity="0.65"/>
        </svg></span>Back</Link>
        <h2 className="font-inter font-semibold text-base text-black/85">Edit project</h2>
      </div>
        <div className="mt-6 lg:flex lg:justify-center lg:w-full">
          <Form datos={datos}/>          
        </div>
      </main>
  )
}

export default Edit