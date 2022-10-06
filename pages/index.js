import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "../components/slider";
import Content from "../components/content";
import Feature from "../components/feature";


export default function Home() {
  return (
  <><Slider/>
  <Feature/>
  <Content/>
  <div style={{padding:200}}></div>

  
  </>
)
}
