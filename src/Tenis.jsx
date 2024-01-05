import React from 'react';

function Tenis(props) {
    return (
        <div className='tenis'>
            <div className="imagem-tenis">
                <img src={props.tenis} alt="" />
            </div>
            <div className="descricao">
                <span>{props.nome}</span>
                <p>Tênis Air Jordan</p>
                <span className='price'>{props.price}</span>
            </div>
        </div>
    );
}

export default Tenis;