import Button from "./Button";

export default function SelectProject({ project, handleDelete }) {
  if (!project) return null;

  const formatDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
        <p className="text-stone-400 mb-4">{formatDate}</p>
        <p className="text-stone-700 mb-4 whitespace-pre-wrap">{project.description}</p>
      </header>
      {/* Tasks and other content */}
    </div>
  );
}
