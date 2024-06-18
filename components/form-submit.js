"use client";
import { useFormStatus } from "react-dom";

export default function FormStatus() {
  const status = useFormStatus();

  return (
    <>
      {status.pending ? (
        <p>Saving Task.........</p>
      ) : (
        <p>Click Here To Save Task</p>
      )}
    </>
  );
}