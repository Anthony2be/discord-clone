import './App.css';
import SideBar from './Sidebar';

import {FaFire, FaAccusoft, FaAirbnb, FaDiscord, FaMicrosoft} from 'react-icons/fa';

function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-600">
      <SideBar>
        <SideBarIcon icon={<FaFire size='28'/>}/>
        <SideBarIcon icon={<FaDiscord size='30'/>}/>
        <SideBarIcon icon={<FaAccusoft size='28'/>}/>
        <SideBarIcon icon={<FaAirbnb size='28'/>}/>
        <SideBarIcon icon={<FaMicrosoft size='28'/>}/>
      </SideBar>
      <div className="ml-[5em] text-white mt-[0.75em] w-screen h-screen text-center">
        <h1>hello world</h1>
      </div>
    </div>
  );
}

const SideBarIcon = ({icon}) =>(
  <div className='sidebar-icon'>
      {icon}
  </div>
);

export default App;
