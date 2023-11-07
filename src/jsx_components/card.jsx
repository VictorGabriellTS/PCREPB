import "../assets/styles/sass/card.scss"

function Card({url, img, alt, desc}) {
    return (
        <>
            <a href={url}>
                <div className="card">
                    <img src={img} alt={alt} />
                    <div className="desc">
                        <p>{desc}</p>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Card;
