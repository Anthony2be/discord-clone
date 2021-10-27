import './index.css'

const SideBar = (props) => {
    //<SideBarIcon icon={<FaFire size='28'/>}/>
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            {props.children}
        </div>
    )
};



export default (SideBar);