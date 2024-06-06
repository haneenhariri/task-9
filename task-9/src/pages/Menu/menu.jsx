import './menu.css'
import NavbarH from '../../components/NavbarH/NavbarH'
import FooterH from '../../components/FooterH/FooterH'
import Order from '../../components/Order/Order'
export default function menu() {
  return (
    <div>
        <NavbarH />
        <section className=' '>
        <Order />
        </section>
        <FooterH/>
    </div>
  )
}
