function Professional({ college, cgpa, skills, img }) {
  return (
    <div className="box">
    <h2>Professional Info</h2>
      <img src={img} alt="study" />
      <p>College: {college}</p>
      <p>CGPA: {cgpa}</p>
      <p>Skills: {skills}</p>
    </div>
  )
}

export default Professional