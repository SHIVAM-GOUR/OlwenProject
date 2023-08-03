import Head from "next/head";
import GoAgriHome from "../components/Go4Agri/GoAgriHome";
import { Fragment } from "react";
// import Footer from "../components/footer/Footer";
// import MetaHead from "../components/header/MetaHead";
// import HomePage from "../components/home/HomePage";
// import HomeComponent from "../components/navbar/Navbar";
// import Navbar from "../components/navbar/Navbar";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Go4Agri</title>
        <meta
          name="description"
          content="Go4Agri"
        />
      </Head>
      <GoAgriHome />
      {/* CODE OF OLWEN */}
      {/* <MetaHead title="Olwen lifesciences" /> */}
      {/* <Navbar/>
      <HomePage /> */}
    </Fragment>
  );
}
