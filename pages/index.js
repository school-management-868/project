import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "../components/slider";
import Content from "../components/content";
import Feature from "../components/feature";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

export default function Home() {
 
  return (
    <>
      <Slider />
      <Feature />
      <Content />
      <div style={{ padding: 200 }}></div>
    </>
  );
}
