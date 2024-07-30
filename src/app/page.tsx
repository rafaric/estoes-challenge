"use client"
import ProjectListCard from "./components/Cards/ProjectListCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import data from './datos.json';
import SearchProject from "./components/SearchProject";

interface ProjectsProps {
  project: string;
  creationDate: string;
}

export default function Home() {
  const [projects, setProjects] = useState<ProjectsProps[] | undefined>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setProjects(data.result);
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  const filteredProjects = projects?.filter((project) =>
    project.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil((filteredProjects?.length || 0) / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProjects?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className="flex min-h-screen flex-col font-roboto lg:px-12">
      <div className="flex shadow-[0px_1px_0px_0px_#D9D9D9] lg:w-full justify-between lg:py-auto  px-4 items-center w-full h-10 font-inter font-semibold">
        <h2>My projects</h2>
        <Link href={"/add"} className="bg-red-500 text-white p-2 rounded font-normal text-xs flex items-center gap-1">
          <span className="text-[20px] pb-1">+ Add project</span>
        </Link>
      </div>
      <div className="mt-10 shadow-[0px_1px_0px_0px_#D9D9D9]">
      <SearchProject projects={projects || []} onSearch={handleSearch} />
        <div className="hidden lg:grid lg:grid-cols-5 justify-between w-full">
          <div className="py-2 px-4 text-center">Project info</div>
          <div className="py-2 px-4 text-center">Project Manager</div>
          <div className="py-2 px-4 text-center">Assigned To</div>
          <div className="py-2 px-4 text-center">Status</div>
          <div className="py-2 px-4 text-center">Action</div>
        </div>
        {currentItems?.map((project: any) => (
          <ProjectListCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-4 flex w-full justify-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
