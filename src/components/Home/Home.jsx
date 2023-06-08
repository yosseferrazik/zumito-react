import './index.css'
import Terminal from './../Terminal/Terminal'

export default function Home() {
    return (
        <div className='home'>
            <h1>Discord bot development <span>Reimagined</span>.<br/></h1>
            <button>Quick start</button>
            <button>Learn more</button>
            <Terminal/>
        </div>
    )
}
