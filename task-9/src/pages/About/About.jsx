import './About.css'
import NavbarH from '../../components/NavbarH/NavbarH'
import AboutH from '../../components/AboutH/AboutH'
import FooterH from '../../components/FooterH/FooterH'
export default function About() {
  return (
    <>
       <NavbarH />
       <section className='p-5'>
       <AboutH/>
       </section>
      <FooterH/>
    </>
  )
}
