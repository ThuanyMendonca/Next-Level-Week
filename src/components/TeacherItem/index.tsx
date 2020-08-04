import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem () {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/17098536?s=460&u=385c1d11b886fa07c0248372c4ef9ae19562803c&v=4" alt="Thuany Mendonça"/>
            <div>
              <strong>Thuany Mendonça</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
          </p>

          <footer>
            <p>
              Preço/hora 
              <strong>R$80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;
