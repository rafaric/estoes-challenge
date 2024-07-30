"use client"
import Image from "next/image"
import User from "../User"
import { useState } from "react"
import Link from "next/link"
import DeleteConfirmationModal from "../Modals/DeleteConfirmationModal"

interface projectCardProps {
    key: number,
    project: {
        "status": string,
        "project": string,
        "description": string,
        "projecManager": number,
        "assignedTo":number,
        "creationDate":Date,
        "uuid": string
      },
    
}

const ProjectListCard:React.FC<projectCardProps> = ({key, project}) => {
    const projectManagers = ["John Doe", "Jane Smith", "Bob Johnson"];
  const assignedTo = ["Alice Williams", "Tom Davis", "Emily Wilson"];
  const status = ["Enabled", "Disabled"];
    const [open, setOpen] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    
    const handleDeleteConfirm = () => {
        // Perform delete action here
        console.log('Deleting project:', project.project);
        setShowDeleteModal(false);
      };

      const handleDeleteCancel = () => {
        setShowDeleteModal(false);
      };

    const handleOpen = () => {
        if (open){
            setOpen(false)
        } else {
            setOpen(true)
        
        }

    }
  return (
    <>
    <div key={key} className="px-4 py-2 flex justify-between flex-col shadow-[0px_-1px_0px_0px_#D9D9D9] relative lg:hidden">
        <div className="flex justify-between items-center">
            <div className="flex flex-col item">
                <h4 className="text-sm text-black/65">{project?.project}</h4>
                <p className="text-[10px] text-black/45">Creation date: {new Date(project?.creationDate).toISOString()}</p>
            </div>
            <Image onClick={handleOpen} className="w-1 h-4 cursor-pointer" src="/Vector.png" alt="" width={12} height={12}/>
        </div>
        <User user={assignedTo[project.assignedTo]}/>
        {open && <div className="w-[180px] h-[76px] bg-white shadow-[0px_2px_8px_0px_#00000015] absolute top-10 right-3 z-10 before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:translate-x-[180px] before:-translate-y-12 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-white">
            
            <Link href="/edit" className="text-xs flex gap-3 py-2 ">
                <span className="pl-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1713 1.99999L9.838 3.33333H3.33333V12.6667H12.6667V6.16199L14 4.82866V13.3333C14 13.5101 13.9298 13.6797 13.8047 13.8047C13.6797 13.9298 13.5101 14 13.3333 14H2.66667C2.48986 14 2.32029 13.9298 2.19526 13.8047C2.07024 13.6797 2 13.5101 2 13.3333V2.66666C2 2.48985 2.07024 2.32028 2.19526 2.19526C2.32029 2.07023 2.48986 1.99999 2.66667 1.99999H11.1713ZM13.6567 1.39999L14.6 2.34399L8.472 8.47199L7.53067 8.47399L7.52933 7.52933L13.6567 1.39999Z" fill="#262626"/>
                    </svg>
                    </span>Edit</Link>
                    <p onClick={()=>setShowDeleteModal(true)} className="text-xs flex gap-3 py-2 shadow-[0px_-1px_0px_0px_#D9D9D9]"><span className="pl-4"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 4.00001H14.6666V5.33334H13.3333V14C13.3333 14.1768 13.263 14.3464 13.138 14.4714C13.013 14.5964 12.8434 14.6667 12.6666 14.6667H3.33325C3.15644 14.6667 2.98687 14.5964 2.86185 14.4714C2.73682 14.3464 2.66659 14.1768 2.66659 14V5.33334H1.33325V4.00001H4.66659V2.00001C4.66659 1.8232 4.73682 1.65363 4.86185 1.52861C4.98687 1.40358 5.15644 1.33334 5.33325 1.33334H10.6666C10.8434 1.33334 11.013 1.40358 11.138 1.52861C11.263 1.65363 11.3333 1.8232 11.3333 2.00001V4.00001ZM11.9999 5.33334H3.99992V13.3333H11.9999V5.33334ZM5.99992 2.66668V4.00001H9.99992V2.66668H5.99992Z" fill="#262626"/>
</svg></span>
Delete</p>
<DeleteConfirmationModal isOpen={showDeleteModal} onConfirm={handleDeleteConfirm} onCancel={handleDeleteCancel}/>
        </div>}
    </div>
    <div key={key} className="py-2 lg:grid lg:grid-cols-5 lg:w-full lg:justify-center place-content-center hidden shadow-[0px_-1px_0px_0px_#D9D9D9] relative">
        <div className="flex flex-col"><h4 className="text-sm text-black/65">{project?.project}</h4><p className="text-[10px] text-black/45">Creation date: {new Date(project?.creationDate).toISOString()}</p></div>
        <div className="flex justify-start gap-2 ml-16"><svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="13.2595" cy="12" rx="12.4444" ry="12" fill="#FFE0B3"/>
                <path d="M7.84944 15H8.66762L10.1122 9.78409H10.1634L11.608 15H12.4261L14.2159 8.45455H13.4105L12.0426 13.7855H11.9787L10.5852 8.45455H9.69035L8.29688 13.7855H8.23296L6.86507 8.45455H6.05967L7.84944 15ZM20.1629 10.5C19.92 9.15767 18.8462 8.36506 17.5294 8.36506C15.8547 8.36506 14.6402 9.65625 14.6402 11.7273C14.6402 13.7983 15.8547 15.0895 17.5294 15.0895C18.8462 15.0895 19.92 14.2969 20.1629 12.9545H19.3703C19.1785 13.8622 18.3987 14.348 17.5294 14.348C16.3405 14.348 15.4072 13.4276 15.4072 11.7273C15.4072 10.027 16.3405 9.10653 17.5294 9.10653C18.3987 9.10653 19.1785 9.59233 19.3703 10.5H20.1629Z" fill="#CA4A02"/>
            </svg>
        {projectManagers[project.projecManager]}</div>
        <div className="ml-16"><User user={assignedTo[project.assignedTo]}/></div>
        <div className="ml-24">{status[Number(project.status)]}</div>
        <div className="w-full flex justify-center"><Image onClick={handleOpen} className="w-1 h-4 cursor-pointer place-content-center" src="/Vector.png" alt="" width={24} height={24}/></div>
        {open && <div className="w-[180px] h-[76px] bg-white shadow-[0px_2px_8px_0px_#00000015] absolute top-10 right-3 z-10 before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:translate-x-[180px] before:-translate-y-12 before:border-8 before:border-x-transparent before:border-t-transparent before:border-b-white">
            
            <Link href="/edit" className="text-xs flex gap-3 py-2 ">
                <span className="pl-4">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1713 1.99999L9.838 3.33333H3.33333V12.6667H12.6667V6.16199L14 4.82866V13.3333C14 13.5101 13.9298 13.6797 13.8047 13.8047C13.6797 13.9298 13.5101 14 13.3333 14H2.66667C2.48986 14 2.32029 13.9298 2.19526 13.8047C2.07024 13.6797 2 13.5101 2 13.3333V2.66666C2 2.48985 2.07024 2.32028 2.19526 2.19526C2.32029 2.07023 2.48986 1.99999 2.66667 1.99999H11.1713ZM13.6567 1.39999L14.6 2.34399L8.472 8.47199L7.53067 8.47399L7.52933 7.52933L13.6567 1.39999Z" fill="#262626"/>
                    </svg>
                    </span>Edit</Link>
                    <p onClick={()=>setShowDeleteModal(true)} className="text-xs flex gap-3 py-2 shadow-[0px_-1px_0px_0px_#D9D9D9]"><span className="pl-4"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 4.00001H14.6666V5.33334H13.3333V14C13.3333 14.1768 13.263 14.3464 13.138 14.4714C13.013 14.5964 12.8434 14.6667 12.6666 14.6667H3.33325C3.15644 14.6667 2.98687 14.5964 2.86185 14.4714C2.73682 14.3464 2.66659 14.1768 2.66659 14V5.33334H1.33325V4.00001H4.66659V2.00001C4.66659 1.8232 4.73682 1.65363 4.86185 1.52861C4.98687 1.40358 5.15644 1.33334 5.33325 1.33334H10.6666C10.8434 1.33334 11.013 1.40358 11.138 1.52861C11.263 1.65363 11.3333 1.8232 11.3333 2.00001V4.00001ZM11.9999 5.33334H3.99992V13.3333H11.9999V5.33334ZM5.99992 2.66668V4.00001H9.99992V2.66668H5.99992Z" fill="#262626"/>
</svg></span>
Delete</p>
<DeleteConfirmationModal isOpen={showDeleteModal} onConfirm={handleDeleteConfirm} onCancel={handleDeleteCancel}/>
        </div>}
    </div>
    </>
  )
}

export default ProjectListCard