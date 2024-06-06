import './Contact.css'
import NavbarH from '../../components/NavbarH/NavbarH'
import FooterH from '../../components/FooterH/FooterH'
import ContactH from '../../components/ContactH/ContactH'
export default function Contact() {
  return (
    <div>
        <NavbarH/>
        <section className='p-5 my-5'>
        <ContactH/>
        </section>
        <FooterH />
    </div>
  )
}
