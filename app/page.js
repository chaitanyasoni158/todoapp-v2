import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TaskForm from "@/components/form";
import { TableDemo } from "@/components/TaskTable";
export default function Home() {
  return (
    <>
      <Card className="w-[600px] bg-zinc-950 dark:bg-white text-black    bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 ">
        <CardHeader>
          <CardTitle className="text-center text-6xl bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">Task Manager</CardTitle>
          <CardDescription className="text-center text-lg text-extrabold">Add Your to-do tasks in one-click</CardDescription>
        </CardHeader>
     
    <TaskForm />
      

      </Card>

<div className="m-4 rounded-md"> <TableDemo /></div>
   

    </>
  );
}




