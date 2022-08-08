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

export default Achievements
