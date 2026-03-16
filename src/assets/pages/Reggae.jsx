import { Info } from "../../components/Info"
import { Recuadros } from "../../components/Recuadros"


export const Reggae = () => {
  return (
    <>


      <div className="p-5 d-flex flex-column" style={{ backgroundImage: "url(./reggaee.jpg)" }}>
        <Info titulo="REGGAE MUSIC" parrafo="El reggae es un género musical originado en Jamaica a finales de los años 60, caracterizado por un ritmo lento a contratiempo (off-beat), bajo melódico y batería one drop. Asociado profundamente al movimiento rastafari y la cultura de resistencia, popularizado mundialmente por Bob Marley y Jimmy Cliff, el reggae se distingue por sus letras sociales y mensajes de paz." fecha="1968" />
        <h1 className="text-center text-white fw-bold p-4">Albumes mas populares</h1>
        <div className="d-flex justify-content-center">
          <Recuadros nombre="BobMarley" imagen="./Exodus.jpg" />
          <Recuadros nombre="JimmyCliff" imagen="./jimmy.jpg" />
          <Recuadros nombre="DennisBrown" imagen="./dennis.jpg" />
        </div>
      </div>



    </>

  )
}
