import {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";

export default function Home() {
  const auth = getAuth();
  const user = auth.currentUser;
  const router = useRouter()
  useEffect(()=>{
    if(!user){
        router.push("/login")
    }
  }, [])
  return (
    <>
      <div>Home</div>
      {user && <h1>{user.displayName}</h1>}
      {!user && <h1>Login First</h1>}
    </>
  );
}
