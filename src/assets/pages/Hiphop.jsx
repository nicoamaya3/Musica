import { Info } from "../../components/Info"
import { Recuadros } from "../../components/Recuadros"

export const Hiphop = () => {
  return (
    <>
    



       <div className="p-5 d-flex flex-column " style={{ backgroundImage: "url(./run.jpg)" }}>
        <Info titulo="HIPHOP MUSIC" parrafo="El hip hop es un movimiento cultural y artístico, originado en el Bronx, Nueva York, a inicios de los años 70 por comunidades afroamericanas y latinas como respuesta al contexto de pobreza y exclusión. Se basa en cuatro pilares fundamentales: el MCing (rappeo), el DJing (mezcla), el graffiti y el breaking." fecha="1970" />
        <h1 className="text-center text-white fw-bold p-4">Albumes mas populares</h1>
        <div className="d-flex justify-content-center">
          <Recuadros nombre="AfrikaBambaataa" imagen="./afrikaa.jpg" />
          <Recuadros nombre="GrandMaster" imagen="./flash.jpg" />
          <Recuadros nombre="DjKoolHerc" imagen="./djk.jpg" />
        </div>
      </div>
    




    </>
  )
}
