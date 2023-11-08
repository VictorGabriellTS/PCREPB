import "../assets/styles/sass/home.scss";
import Card from "./card.jsx";
import ZumbiDosPalmares from "../assets/images/zumbipalmares.jpg";
import MusicasAfro from "../assets/images/musicasafro.jpg";
import Cultura from "../assets/images/culturaafro.jpg";
import Jogos from "../assets/images/jogosafro.jpg";
import Djamila from "../assets/images/djamila.png";

function Home() {
    let ZP = { ZumbiDosPalmares };
    const card1 = {
        url: "Cultura",
        alt: "Imagem sobre a cultura afro-brasileira",
        desc: "Conheca mais sobre essa vasta cultura",
    };
    const card2 = {
        url: "Cultura",
        alt: "Image sobre jogos sobre a cultura afro-brasileira",
        desc: "Veja alguns jogos sobre a cultura afro-brasileira",
    };
    const card3 = {
        url: "Cultura",
        alt: "Zumbi dos Palmares",
        desc: "Conhece mais sobre algumas figuras históricas",
    };
    const card4 = {
        url: "Cultura",
        alt: "Imagem de musicas Afro-Brasileira",
        desc: "Escute as mais divesas musicas da cultura afro-brasileira",
    };

    return (
        <>
            <div className="p_banner">
                <p>Faça parte do projeto e ajude essa comunidade a crescer</p>
                <button type="button">
                    <a href="Junte-se_a_Nós">Junte-se a Nós</a>
                </button>
            </div>
            <div className="cards_box">
                <span>
                    <div></div>
                    <p>EXPLORE</p>
                    <div></div>
                </span>
                <div className="cards">
                    <Card
                        url={card1.url}
                        img={Jogos}
                        alt={card1.alt}
                        desc={card1.desc}></Card>
                    <Card
                        url={card2.url}
                        img={Cultura}
                        alt={card2.alt}
                        desc={card2.desc}></Card>
                    <Card
                        url={card3.url}
                        img={ZumbiDosPalmares}
                        alt={card3.alt}
                        desc={card3.desc}></Card>
                    <Card
                        url={card4.url}
                        img={MusicasAfro}
                        alt={card4.alt}
                        desc={card4.desc}></Card>
                </div>
            </div>
            <div className="yt_banner">
                <p>
                    Assista esse vídeo do canal Criar e Crescer sobre como a
                    educação antirracista é importânte dentro das escolas
                </p>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/1X73XgfDZv8?si=_WcwvWhZhnhEru4o"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div className="strip_text">
                <p>"Precisamos gritar para sermos ouvidos."</p>
            </div>
            <div className="s_banner">
                <div className="image">
                    <img src={Djamila} alt="Djamina Ribeiro" />
                </div>
                <div className="text">
                    <p>
                        "Não é a cor da pele que é o problema, é o racismo. Não
                        é o gênero que é o problema, é o sexismo. Não é a
                        orientação sexual que é o problema, é a homofobia. Não é
                        a falta de habilidade que é o problema, é o capacitismo.
                        Precisamos entender que o problema é a opressão, e é
                        isso que precisamos combater."
                        <p>Djamila Ribeira</p>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
