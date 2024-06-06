import './Home.css'
import NavbarH  from '../../components/NavbarH/NavbarH'
import Hero from '../../components/Hero/Hero'
import CardServ from '../../components/CardServ/CardServ'
import AboutH from '../../components/AboutH/AboutH'
import Order from '../../components/Order/Order'
import MenuA from '../../components/MenuA/MenuA'
import ContactH from '../../components/ContactH/ContactH'
import FooterH from '../../components/FooterH/FooterH'
export default function Home() {
  return (
    <>
      <NavbarH />
      <Hero />
      <CardServ/>
      <AboutH />
      <MenuA />
      <Order/>
      <ContactH />
      <FooterH />
    </>
  )
}
