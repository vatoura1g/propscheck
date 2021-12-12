import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/Profile';

function App() {
  let headerr={
    fullname:'Sassi Montassar',
      bio:'Simplicity is the key to happiness',
      profession:'Full Stack Developer'
   }
   const handlename=(name)=>{
 alert (`my name is  ${name}`)
   }
  return (
    <div className="App">
      <Profile data={headerr} handlename={handlename}>
   <img src="/Me.jpg" alt="" width="400" className="icon" />
 </Profile>
    </div>
  );
}

export default App;
