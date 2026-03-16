import { Info } from "../../components/Info"
import { Recuadros } from "../../components/Recuadros"


export const Dancehall = () => {
  return (
    <>
    
    
      <div className="p-5 d-flex flex-column " style={{ backgroundImage: "url(./buju.webp)" }}>
        <Info titulo="DANCEHALL MUSIC" parrafo="El dancehall es un género musical y estilo de baile enérgico originado en Jamaica a finales de los 70, derivado del reggae pero con ritmos digitales más rápidos. Se caracteriza por movimientos intensos de cadera, pecho y torso (como el wine o las waves), siendo una forma de expresión liberadora, comunitaria y popular." fecha="1979" />
        <h1 className="text-center text-white fw-bold p-4">Albumes mas populares</h1>
        <div className="d-flex justify-content-center">
          <Recuadros nombre="BujuBanton" imagen="./bujua.jpg" />
          <Recuadros nombre="Capleton" imagen="./cap.png" />
          <Recuadros nombre="BeenieMan" imagen="./benie.jpg" />
        </div>
      </div>
    
    
    
    </>
  )
}
