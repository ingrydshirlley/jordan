import imagem from './jordan.png';
import logo from './logo-jordan.png';

function Cabecalho() {
    return (

        <div className='container-cabecalho'>
            <div className='imagem'>
                <header>Frete grátis para todo o Brasil!</header>

                <img src={imagem} alt="imagem michael jordan" />
            </div>

            <div className='textos-cabecalho'>
                <div className='div-logo'>
                    <img src={logo} alt="logo jordan" />
                    <span>JordanShoes</span>
                </div>

                <div className='textos'>
                    <h2>A melhor loja de Jordan!</h2>
                    <span>O tênis Jordan é fruto de uma velha e forte
                        parceria entre a Nike e o jogador Michael Jordan.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Cabecalho;