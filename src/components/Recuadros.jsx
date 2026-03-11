

export const Recuadros = ({nombre , imagen}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center flex-column gap-3">
              <img className="w-50 rounded" src={imagen} alt="" />
              <div>
                <h4 className="text-center text-white w-50">{nombre}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
