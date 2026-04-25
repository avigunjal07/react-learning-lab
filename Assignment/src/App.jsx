import './App.css'
import Personal from './components/Personal'
import Professional from './components/Professional'
import Header from './components/Header'

import profile from './assets/avishkar1.jpg'
import study from './assets/avishkar2.jpeg'

function App() {
  return (
    <div className="container">

      <div className="container">

  <h1 style={{textAlign: 'center', color: 'blue'}}>
    My Dashboard
  </h1>

  <Header title="Welcome to My Personal + Professional Profile" />

  <div className="cards">

    <Personal 
      name="Avishkar Gunjal"
      age="21"
      img={profile}
      address='Perne Phata, Haveli, Pune'
    />

    <Professional 
      college="JSPM's BSIOTR Wagholi"
      cgpa="9.5"
      skills="HTML, CSS, JavaScript, React"
      img={study}
    />

  </div>

</div>

    </div>
  )
}

export default App