import Info from "./Info"
import Skills from "./Info"
import Achievements from "./Info"
import Contact from "./Info"

const Main = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Info />
      <div style={{ display: "flex" }}>
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </div>
  )
}

export default Main
