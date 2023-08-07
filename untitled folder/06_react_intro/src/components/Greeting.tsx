function Greeting() {
  let user = "richa";
  let style = {
    width: "80px",
    height: "80px",
  };
  return (
    <>
      <p>Hello {user}</p>
      <img src="/profile_image.jpg" style={style} />
    </>
  );
}

export default Greeting;
