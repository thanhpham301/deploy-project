import RunText from './Runtext'
import Slideshow from './Slideshow'
import Footer from './Footer';

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
            <div id="bot">
                <Footer />
            </div>
        </div>
    )
}

export default Home;