import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function LivrosDoados(){
    
    const [livros,setLivros] = useState([])
    
    const puxarLivros = async() =>{
        const resposta = await axios.get("https://api-livros-vainaweb-vp00.onrender.com/livros")
        console.log(resposta)
    }

    puxarLivros()
    
    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroProtagonista} alt="Imagem do livro O Protagonista" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    )
}