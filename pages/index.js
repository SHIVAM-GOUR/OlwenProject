import Footer from '../components/footer/Footer'
import MetaHead from '../components/header/MetaHead'
import HomePage from '../components/home/HomePage'
import HomeComponent from '../components/navbar/Navbar'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  // Testing Push
  return (
    <div>
      <MetaHead title="Olwen lifesciences" />
      <Navbar/>
      <HomePage />
    </div>
  )
}
