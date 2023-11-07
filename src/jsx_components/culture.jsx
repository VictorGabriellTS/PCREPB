import "../assets/styles/sass/culture.scss";

function Culture() {
    return (
        <>
            <div className="banners">
                <div className="c_banner cooking">
                    <p>
                        Veja sobre a vasta culinária afro-brasileira e conheca
                        as mais diversas iguarias presentes nela
                    </p>
                    <button className="cta_btn" type="button">
                        <a href="#">Conhecer</a>
                    </button>
                </div>
                <div className="c_banner religion">
                    <p>Conheça mais sobre as religiões de matriz africana</p>
                    <button className="cta_btn" type="button">
                        <a href="#">Ver mais</a>
                    </button>
                </div>
                <div className="c_banner dances">
                    <p>Aprenda as danças afro-brasileiras</p>
                    <button className="cta_btn" type="button">
                        <a href="#">Conhecer</a>
                    </button>
                </div>
                <div className="c_banner musics">
                    <p>Escute musicas enquato aprende um pouco sobre seu passado</p>
                    <button className="cta_btn" type="button">
                        <a href="#">Ver mais</a>
                    </button>
                </div>
                <div className="c_banner games">
                    <p>aprenda sobre a cultura afro-brasileira enquanto joga</p>
                    <button className="cta_btn" type="button">
                        <a href="#">Conhecer</a>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Culture;
