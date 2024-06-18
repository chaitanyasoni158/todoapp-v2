"use server"
import {addPost} from "@/lib/db-functions"

export async function getFormData(formData) {
    const title = formData.get('title');
    const content = formData.get('content');


    let errors = [];

    if(!title || title.trim().length ===0){
    errors.push("Title is Required")
    }
    
    if(!content || content.trim().length==0){
      errors.push("Content is Required")
    
    }

    if(errors.length>0){
      return {errors}
    }

    await addPost(title, content)
    
}
