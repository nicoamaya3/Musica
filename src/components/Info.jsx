

export const Info = ({titulo, parrafo, fecha}) => {
    return (
        <>

            <div className="container ">
                <div className="row">
                    <div className="col-6 p-5">
                        <div className="d-flex  flex-column text-white gap-2">
                            <h4 className="fw-light">Original</h4>
                            <h1>{titulo}</h1>
                            <div className="d-flex gap-3  align-items-end">
                                <h5 className="fs-6">{fecha}</h5>
                                <h5 className="fs-6">Music</h5>
                                <button className="btn btn-dark w-25">Ver</button>
                            </div>
                            <h5>Escucha en todos lados</h5>
                            <p>{parrafo}</p>
                        </div>
                        <button className="btn btn-dark w-25">Escuchar</button>
                    </div>
                    <div className="col-6">
                    </div>
                </div>
            </div>

        </>
    )
}
