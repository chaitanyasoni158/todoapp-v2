import { getPosts } from "@/lib/db-functions"
import DeleteButton from "./delete_button"
import { deletePost } from "@/lib/db-functions";
import { Button } from "./ui/button";
import { setIsDone } from "@/lib/db-functions";
import {
    Table,
    TableBody,

    TableCell,

    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export async function TableDemo({ action }) {
    const tasks = await getPosts()


        return <>
        {tasks.length===0 ? <p className="text-4xl text-center   ring-4 p-4 rounded-md ring-black">No tasks Found</p> : <Table className="w-96 rounded-lg text-center text-white bg-zinc-950 dark:bg-white     bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100">
            <TableHeader className='bg-zinc-950 dark:bg-white'>
                <TableRow >
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Remove</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tasks.map((task) => (
                    <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.id}</TableCell>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.content}</TableCell>
                        <TableCell>
                            <form action={setIsDone.bind(null,task.id)} ><Button>{task.is_done ? "✔" : "⏳"}</Button></form>
                        </TableCell>
                        <TableCell>              <form action={deletePost.bind(null, task.id)}><DeleteButton />              </form>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    }

    </>

}

