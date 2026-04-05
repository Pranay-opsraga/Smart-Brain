import { Tilt } from 'react-tilt'
import brain from '../assets/brain.svg'

const Logo = () => {
    return (
        <div className="m-4">
            <Tilt className="Tilt rounded-lg shadow-lg" options={{ max: 25 }} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner p-3 w-full h-full rounded-lg"
                    style={{ background: 'linear-gradient(135deg, #ed53af, #44abf5)' }}>
                    <img src={brain} alt="logo" className="w-full h-full" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;