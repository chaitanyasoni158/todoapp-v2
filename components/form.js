"use client"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import FormStatus from "./form-submit";

import { getFormData } from "@/actions/formdata";

import {

    CardContent,

    CardFooter,


} from "@/components/ui/card";

export default  function TaskForm() {




    return (
        <>
            <form action={getFormData}>
                <CardContent>


                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title" className="text-4xl text-bold ">Title</Label>
                            <Input id="title" placeholder="Title  of your  task.... " className="text-black placeholder-black text-2xl" name="title" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="content" className="text-4xl"  >Content</Label>
                            <Textarea id="content" placeholder="Content of your task........." className="text-black text-2xl placeholder-black" name="content" />
                        </div>
                    </div>

                </CardContent>
                <CardFooter className="flex flex-col justify-center">

                    <Button type="submit" >Save The Task</Button>
                   
        <FormStatus/>



        
                    


                </CardFooter>
            </form>
        </>
    )
}