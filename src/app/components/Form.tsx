"use client"

import { useState } from "react";

interface formProps{
  datos?:{
    project?: string,
    description?: string,
    projectManager?: number,
    assignedTo?:number,
    status?: number
  }
}
const Form:React.FC<formProps> = ({
  datos
}) => {
  const [formData, setFormData] = useState({
    project: datos?.project || '',
    description: datos?.description || '',
    projectManager: datos?.projectManager || 0,
    assignedTo: datos?.assignedTo || 0,
    status: datos?.status || 0
  });
  const [error, setError] = useState("")
  const projectManagers = ["John Doe", "Jane Smith", "Bob Johnson"];
  const assignedTo = ["Alice Williams", "Tom Davis", "Emily Wilson"];
  const status = ["Enabled", "Disabled"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setError("")
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const isValid = Object.values(formData).every(value => typeof(value) == "string" ? (value.trim() !== '') : value);

    if (isValid) {
      // Submit the form data
      console.log('Form data:', formData);
      // Add your form submission logic here
    } else {
      // Display an error message or highlight the empty fields
      setError('Por favor rellene los campos faltantes');
    }
  }
  return (
    <form className="py-4 px-4 flex flex-col lg:w-[664px] lg:bg-white" onSubmit={handleSubmit}>
        <label className="pt-4 text-sm text-[#262626]" htmlFor="project">Project Name</label>
          <input onChange={handleChange} className="input " minLength={4} name="project" id="project" type="text" value={formData.project}/>
        <label className="pt-4 text-sm text-[#262626]" htmlFor="description">Description</label>
          <input onChange={handleChange} className="input" name="description" minLength={15} id="description" type="text" value={formData.description}/>
        <label className="pt-4 text-sm text-[#262626]">Project Manager</label>
          <select onChange={handleChange} value={formData.projectManager} name="projectManager" className="select">
            <option className="px-3" value={0}>Select a person</option>
            {projectManagers.map((value,index) => <option key={index+1} value={index+1}>{value}</option>)}
          </select>
        <label className="pt-4 text-sm text-[#262626]">Assigned to</label>
          <select onChange={handleChange} className="select" value={formData.assignedTo} name="assignedTo">
            <option value={0}>Select a person</option>
            {assignedTo.map((value:string,index) => <option key={index+1} value={index+1}>{value}</option>)}
          </select>
        <label className="pt-4 text-sm text-[#262626]">Status</label>
          <select onChange={handleChange} className="select" name="status" value={formData.status}>
            {status.map((value,index) => <option key={index} value={index}>{value}</option>)}
          </select>
        <button className="mt-4 py-2 px-4 bg-[#F5222D] w-fit text-[#fff]">Create project</button>
        {error!="" ? <p className="text-[#F5222D]">{error}</p> : ""}
    </form>
  )
}

export default Form