import Button from "./Button";
import Tasks from "./Tasks";

// SelectProject component: Displays the selected project and manages tasks
export default function SelectProject({ project, onDeleteProject, onAddTask, onDeleteTask, tasks }) {
  if (!project) return null;

  // Format due date for display
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button onClick={onDeleteProject}>Delete</Button>
        </div>
        <p className="text-stone-400 mb-4">{formattedDate}</p>
        <p className="text-stone-700 mb-4 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
}
