import { Link, useLocation } from 'react-router-dom'
import SideBar from './components/SideBar'

const Home = (props) => {
    const pathname = useLocation().pathname

    const toggleSideBar = () => {
        document.getElementById('root').classList.toggle('disable-scroll')
        document.querySelector('.overlay').classList.toggle('open-overlay')
        document.querySelector('.sidebar').classList.toggle('open')
    }

    return (
        <div className="d-flex">     
            <SideBar />
         
            <div className="m-4" style={{ flexGrow: '1' }}>
            

                {props.children}
            </div>
        </div>
    )
}

export default Home
