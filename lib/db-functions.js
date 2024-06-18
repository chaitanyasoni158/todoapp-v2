"use server"
import sql from "better-sqlite3"
import { revalidatePath } from "next/cache";

const db = sql("user_data.db");

const createTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_done BOOLEAN NOT NULL DEFAULT 0
  )
`);

createTable.run();


export async function addPost(title, content) {
  const insertPost = db.prepare("INSERT INTO tasks (title, content) VALUES (?, ?)");
  insertPost.run(title, content);
  revalidatePath("/","layout")
}

export async function getPosts() {
  const getPosts = db.prepare("SELECT * FROM tasks");
  return getPosts.all();
}

export async function setIsDone(id){
    let getIsDone = db.prepare("select is_done  from  tasks where id = ?").get(id)
    let newIsDone = getIsDone.is_done ? 0 : 1;

    db.prepare("UPDATE tasks SET is_done = ? WHERE id = ?").run(newIsDone,id)
    console.log(getIsDone)
    revalidatePath("/","layout")
}

export async function deletePost(id) {
  const deletePost = db.prepare("DELETE FROM tasks WHERE id = ?");
  deletePost.run(id);
  revalidatePath("/","layout")
}












