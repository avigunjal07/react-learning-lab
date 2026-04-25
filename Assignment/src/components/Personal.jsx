function Personal(props) {
  return (
    <div className="box">
      <h2>Personal Info</h2>
      <img src={props.img} alt="profile" />
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
    </div>
  )
}

export default Personal