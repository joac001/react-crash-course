import './style/app.css'; 
import python from './assets/python.png';
import java from './assets/java.png';
import cpp from './assets/cpp.png';
import flutter from './assets/flutter.png';

function App() {
    return (<>
      <div className='app'>
        <Title />
        <TecnologiesIcons />
        <Card />
        <Card />
        <Card />
      </div>
      </>)
}

function Title() {

  return (<>
  <div className="title">
    <div className="name">
      <h1>NOMBRE APELLIDO</h1>
    </div>
  
    <div className="presentation">
      <p>Software developer</p>
    </div>

    <div className="arrow">
      <p>Scroll down</p>
      <svg className='arrow-svg' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 330 330" xmlSpace="preserve">
        <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
      </svg>
    </div>
  </div>

  </>)
}

function TecnologiesIcons() {
  return (<>
    <div className='icons-container'>
    <img src={python} alt="Python"/>
    <img src={java} alt="Java"/>
    <img src={cpp} alt="C++"/>
    <img src={flutter} alt="Flutter"/>
    </div>
  </>)
}


function Card() {
  return (<>
    <div className='card'>
      <div className='info-card'>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis incidunt omnis 
          sint doloremque, aperiam doloribus aliquam numquam maxime magni autem voluptas odio voluptates in minus ab repudiandae 
          consequuntur possimus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis incidunt omnis 
          sint doloremque, aperiam doloribus aliquam numquam maxime magni autem voluptas odio voluptates in minus ab repudiandae 
          consequuntur possimus?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis incidunt omnis 
          sint doloremque, aperiam doloribus aliquam numquam maxime magni autem voluptas odio voluptates in minus ab repudiandae 
          consequuntur possimus?
          </p>
      </div>
    </div>
  </>)
}

export default App