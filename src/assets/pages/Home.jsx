import { Info } from "../../components/Info"
import { Recuadros } from "../../components/Recuadros"


export const Home = () => {
  return (
    <>
    
      <div className="p-5 d-flex flex-column" style={{ backgroundImage: "url(./dj.jpg)" }}>
        <Info titulo="MUSIC OF X" parrafo="La música es el arte de organizar sensible y lógicamente una combinación coherente de sonidos y silencios, utilizando los principios fundamentales de la melodía, la armonía y el ritmo. Es una forma de expresión cultural y emocional, creada con voces o instrumentos, que actúa como un estímulo sonoro en el tiempo." fecha="2026" />
        <h1 className="text-center text-white fw-bold p-4">Géneros</h1>
        <div className="d-flex justify-content-center">
        <Recuadros nombre ="Reggae" imagen = "../public/reggae.jpg" />
        <Recuadros nombre ="Dancehall" imagen = "../public/dancehall.jpg" />
        <Recuadros nombre ="Hiphop" imagen = "../public/hiphop.jpg" />
        </div>
      </div>

    </>
  )
}
