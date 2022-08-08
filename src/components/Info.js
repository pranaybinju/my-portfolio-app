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

export default Info
