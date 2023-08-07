function Profile() {
  let user = "richa";
  let style = {
    width: "200px",
    height: "200px",
  };

  function clickHandler() {
    console.log("Added more text");
  }
  return (
    <div>
      <>
        <div className="profile">
          <img src="/profile_image.jpg" style={style} />

          <div className="description">
            <h2>Hello my name is {user}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit et
              optio laboriosam minus fugiat? Id, accusantium fuga! Perspiciatis
              iure eius quas impedit voluptatum sed rerum repellendus commodi
              explicabo, quod dolorem?
            </p>
            <button onClick={clickHandler}>Read more</button>
          </div>
        </div>
      </>
    </div>
  );
}

export default Profile;
