const Info = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <img
        alt="my-img"
        src="ash.jpeg"
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          objectFit: "contain",
          flex: 1,
        }}
      ></img>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "3rem", margin: 0 }}>{"Hi, I'm Ash Ketchum"}</h1>
        <p style={{ fontSize: "2rem", margin: 0 }}>
          {"Pokemon Champion and Trainer from Japan"}
        </p>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <h1
        style={{
          fontSize: "3rem",
          margin: 0,
          textAlign: "center",

          marginBottom: "1rem",
        }}
      >
        {"Skills"}
      </h1>
      <p style={{ fontSize: "1.2rem", margin: 0, marginBottom: "1rem" }}>
        {"Playing with Pikachu"}
      </p>
      <p style={{ fontSize: "1.2rem", margin: 0, marginBottom: "1rem" }}>
        {"Training Pokemons"}
      </p>
      <p style={{ fontSize: "1.2rem", margin: 0, marginBottom: "1rem" }}>
        {"Defeating Team Rocket"}
      </p>
    </div>
  )
}

const Contact = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <h1 style={{ fontSize: "3rem", margin: 0, textAlign: "center" }}>
        {"Contact"}
      </h1>
      <p style={{ fontSize: "1.2rem" }}>{"ash.ketchum@pokemail.com"}</p>
    </div>
  )
}

const Achievements = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <h1
        style={{
          fontSize: "3rem",
          margin: 0,
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        {"Achievements"}
      </h1>
      <p style={{ fontSize: "1.2rem", margin: 0, marginBottom: "1rem" }}>
        {"Champion of the Orange League"}
      </p>
      <p style={{ fontSize: "1.2rem", margin: 0, marginBottom: "1rem" }}>
        {"Champion of the Manalo Conference"}
      </p>
      <p style={{ fontSize: "1.2rem", margin: 0, marginBottom: "1rem" }}>
        {"Pokémon Champion of the Orange Islands"}
      </p>
    </div>
  )
}

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
