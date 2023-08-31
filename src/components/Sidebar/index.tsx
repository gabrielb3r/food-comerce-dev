import { useState } from "react"
import { Container } from "./styles"
import { ReactComponent as BurguerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'

export function Sidebar() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Container isMenuOpen={menuOpen}>
            <button type='button' onClick={handleToggleMenu}>
                <img src={menuImg} alt="Menu" />
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="#" className="active">
                            <BurguerIcon />
                            <span>Hambúrgueres</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <PizzaIcon />
                            <span>Pizzas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <SodaPopIcon />
                            <span>Regrigerantes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <IceCreamIcon />
                            <span>Sorvetes</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}