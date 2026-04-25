import './App.css'
import UserCard from './components/userCard'
import avishkar_img from './assets/avishkar.jpeg'
import ajay_img from './assets/ajay.jpeg'
import yash_img from './assets/yash.jpeg'
import rohit_img from './assets/rohit.jpeg'

function App() {
  
  return (
    <div className='container'>
      <UserCard username='Avishkar Gunjal' userImg={avishkar_img} userdesc='Frontend Developer'/>
      <UserCard username='Ajay Ghadage' userImg={ajay_img} userdesc='backend Developer'/>
      <UserCard username='Yash Babar' userImg={yash_img} userdesc='ML Engineer'/>
      <UserCard username='Rohit Gaikwad' userImg={rohit_img} userdesc='Database Engineer'/>
    </div>
  )
}

export default App
