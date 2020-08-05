import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/42738981?s=460&u=47d70481e483b4ffa5c22437a5594a3545bff2dc&v=4" alt="Vinicius" />
                <div>
                    <strong>Vinicius Amorim</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Meu nome é Vinicius Amorim, tenho 20 anos.
                        <br /><br />
                        Estou no 8º semestre de Ciências da Computação na faculdade São Judas (USJT).
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem