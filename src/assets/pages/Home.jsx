import { Info } from "../../components/Info"
import { Recuadros } from "../../components/Recuadros"


export const Home = () => {
  return (
    <>
    
      <div className="p-5" style={{ backgroundImage: "url(./dj.jpg)" }}>
        <Info />
        <Recuadros />
      </div>

    </>
  )
}
