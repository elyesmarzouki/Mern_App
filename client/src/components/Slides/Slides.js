import 'bootstrap/dist/css/bootstrap.min.css';
import './Slides.css';
import { Carousel } from "react-bootstrap";
import slideOne from "../../assests/slide1.jpg";
import slideTwo from "../../assests/slide2.jpg";
import slideThree from "../../assests/slide3.jpg";

function Slides() {
const styleImage={width:1600,height:588}
const styleTitle={fontSize:80,color:"rgb(11,225,208)"}
const styleP={fontSize:50,color:"rgb(11,225,208)",fontFamilly:"serif"}
return (
    <div className="App">
    <Carousel>
        <Carousel.Item>
            <img
            src={slideOne}
            alt="First slide"
            style={styleImage}
            className="d-block w-100"
            />
            <Carousel.Caption>
            <h3 style={styleTitle} className="ques">Why us ?</h3>
            <p style={styleP} className="resres">You can look for a job while staying at home.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            src={slideTwo}
            alt="Second slide"
            style={styleImage}
            className="d-block w-100"
            />
            <Carousel.Caption>
            <h3 style={styleTitle} className="ques">Why us ?</h3>
            <p style={styleP} className="resres">You can recruit people while staying at home.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            src={slideThree}
            alt="Third slide"
            style={styleImage}
            className="d-block w-100"
            />
            <Carousel.Caption>
            <h3 style={styleTitle} className="ques">Why us ?</h3>
            <p style={styleP} className="resres">We allow you to filter the offers and the applications to make your job easier.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
);
};

export default Slides;
