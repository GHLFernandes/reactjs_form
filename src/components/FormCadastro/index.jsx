import React from 'react';

function formCadastro(){
    return(
        <form>
            <label>Nome</label>
            <input type="text"></input>

            <label>Sobrenome</label>
            <input type="text"></input>

            <label>CPF</label>
            <input type="text"></input>

            <label>Promoções</label>
            <input type="checkbox"></input>

            <label>Novidades</label>
            <input type="checkbox"></input>

            <button type="submit">Cadastrar</button>
        </form>
    )
}

export default formCadastro;