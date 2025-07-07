export const Card = () => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

//Solo falta poner bien la imagen, y crear el objeto props para que las frases sean distintas en cada card. Revisar todo y enviar