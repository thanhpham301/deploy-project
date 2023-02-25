import RunText from './Runtext'
import Slideshow from './Slideshow'

function Home () {
    return (
        <div>
            <div id="top">
                <RunText  />
            </div>
            <br/>
            <hr />
            <br/>
            <div id="mid">
                <Slideshow />
            </div>
            <br/>
            <hr/>
            <div id="bot"></div>
        </div>
    )
}

export default Home;