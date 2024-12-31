import styles from './styles.module.scss'
import {useNavigate, useParams} from 'react-router-dom'
import cardapio from 'data/cardapio.json';
import TagsPrato from "../../components/tagsPrato";
import NotFound from "../notFound";
import PaginaPadrao from "../../components/paginaPadrao";

export default function Prato() {
    const navigate = useNavigate();
    const {id} = useParams();
    const prato = cardapio.find(pratoBuscado => pratoBuscado.id === Number(id));
    if(!prato) {
        return <NotFound />;
    }
    return (
        <PaginaPadrao>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>{prato.title}</h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>{prato.description}</p>
                    <TagsPrato {...prato} />
                </div>
            </section>
        </PaginaPadrao>
    )
}