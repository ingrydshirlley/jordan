import Tenis from "./Tenis";
import tenis1 from "./tenis1.svg"
import tenis2 from "./tenis2.svg"
import tenis3 from "./tenis3.svg"
import tenis4 from "./tenis4.svg"
import tenis5 from "./tenis5.svg"
import tenis6 from "./tenis6.svg"

function ConjuntoTenis() {
    return (
        <div className='conjunto-tenis'>
            <div className='textos-tenis'>
                <h3>Os melhores em um só lugar</h3>
                <span>
                    A marca Jordan na JordanShoes é a escolha certa para
                    os amantes de sneakers que buscam estilo e conforto.
                </span>
            </div>

            <div className='box-tenis'>
                <Tenis tenis={tenis1} nome="Air Jordan 1 Mid Dutch Green" price="R$ 1.199,99"/>
                <Tenis tenis={tenis2} nome="Air Jordan 1 High Zoom CMFT Tropical Twist" price="R$ 1.199,99"/>
                <Tenis tenis={tenis3} nome="Air Jordan 1 Mid Dutch Green" price="R$ 1.199,99"/>
                <Tenis tenis={tenis4} nome="Air Jordan 1 Mid GS Light Smoke Grey" price="R$ 1.199,99"/>
                <Tenis tenis={tenis5} nome="Air Jordan 1 Mid SE Bright Citrus" price="R$ 1.199,99"/>
                <Tenis tenis={tenis6} nome="Air Jordan 1 Mid Grey Camo" price="R$ 1.199,99"/>
            </div>
        </div>
    );
}

export default ConjuntoTenis;