import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchProjects = async () => {
  // TODO: Replace with actual API call
  return [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];
};

const Index = () => {
  const [file, setFile] = useState(null);
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // TODO: Implement file upload logic
    console.log("Uploading file:", file);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">GPT Engineer Project Manager</h1>
        <p className="text-xl text-gray-600">Manage your GPT Engineer projects seamlessly</p>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upload File</h2>
          <div className="flex gap-4">
            <Input type="file" onChange={handleFileChange} />
            <Button onClick={handleUpload} disabled={!file}>Upload</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          {isLoading ? (
            <p>Loading projects...</p>
          ) : error ? (
            <p>Error loading projects: {error.message}</p>
          ) : (
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.id} className="flex items-center justify-between bg-gray-100 p-4 rounded">
                  <span>{project.name}</span>
                  <Link to={`/project/${project.id}`}>
                    <Button variant="outline">View</Button>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2024 GPT Engineer Project Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;