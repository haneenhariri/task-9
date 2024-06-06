import './Service.css'
import NavbarH from '../../components/NavbarH/NavbarH'
import CardServ from '../../components/CardServ/CardServ'
import FooterH from '../../components/FooterH/FooterH'
export default function Service() {
  return (
    <div>
      <NavbarH />
      <section className='servec p-5'>
      <CardServ />
      </section>
      <FooterH />
    </div>
  )
}
