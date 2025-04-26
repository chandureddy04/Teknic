import './App.css';
import steelstructure from './steelstructure.jpg'
import SteelImage1 from './SteelImage1.png';
import SteelImage2 from './SteelImage2.png';
import SteelImage3 from './SteelImage3.png';
import SDSImage from './SDSImage.png';
import Footer from './Footer';
import ImageCarousel from './ImageCarousel';

function App() {
  const images = [SteelImage1, SteelImage2, SteelImage3, SDSImage];
  const textSlides = [{
    heading: "Structural & Miscellaneous Steel Detailing",
    content: "We create accurate 3D models and detailed drawings for structural and miscellaneous steel elements, including beams, columns, stairs, handrails, ladders, and platforms. Our deliverables ensure efficient fabrication and error-free installation on-site, helping streamline the construction process."
  },
  {
    heading: "Connection Design & Engineering Support",
    content: "We provide smart, code-compliant connection designs for all steel components — covering bolted, welded, and complex joint systems. With engineer-reviewed calculations and fully detailed outputs, we ensure your structures are safe, stable, and fabrication-ready."
  },
  {
    heading: "Erection Planning & Field Coordination",
    content: "We develop clear and actionable erection drawings, field bolt lists, and phase-based installation plans. Our erection support services optimize construction sequencing, minimize on-site delays, and ensure safe and organized steel assembly from start to finish."
  },
  {
    heading: "As-Built Modeling & Post-Construction Documentation",
    content: "We update steel models based on field changes and deliver precise as-built documentation for final project records. Our as-built services help contractors and owners maintain accurate records for future maintenance, renovations, or compliance audits."
  }]
  return (
    <div className="App">
      <div className="App-header">
        <div className='logo'>
          TEKNIC
        </div>
        <div style={{ marginRight: '1rem' }}>
          <a className='link' href='#home'>Home</a>
          <a className='link' href='#services'>Services</a>
          <a className='link' href='#about'>About</a>
          <a className='link' href='#footer'>Contact Us</a>
        </div>
      </div>
      <div id="#home" style={{ height: '99vh', width: '100vw' }}>
        <img src={steelstructure} height={'100%'} width={'100%'} />
        <div className='caption'>
          Building the Future with Steel Excellence
          <div style={{ fontSize: '1rem' }}>We design, fabricate, and erect steel structures for a wide range of projects.</div>
        </div>
      </div>
      <div className='About' id='about' style={{ height: '99vh', width: '100vw' }}>
        <div className='about_caption'>
          {/* <img src={steelImage} width={400} height={400} /> */}
          <ImageCarousel images={images} />
        </div>
        <div className='about_caption' style={{ width: '50%' }}>
          <div className='about_title'>Teknic Steel</div>
          <div style={{ fontSize: '1rem', fontWeight: 600 }}>Where Steel Meets Innovation: We combine expert engineering with advanced technology to push the boundaries of steel structures, creating exceptional results for your projects</div>
        </div>
      </div>
      <div className='services' id='services' style={{ height: '99vh', width: '100vw' }}>
        <div className='about_caption' style={{ width: '40%', paddingLeft: '2rem' }}>
          <div className='about_title'>Services</div>
          <div style={{ fontSize: '1rem', fontWeight: 600 }}>We deliver steel detailing, connection design, erection planning, and as-built documentation — providing complete support from fabrication to field</div>
        </div>
        <div className='about_caption' style={{ width: '60%' }}>
          {/* <img src={steelImage} width={400} height={400} /> */}
          <ImageCarousel textSlides={textSlides} />
        </div>

      </div>
      <Footer />
    </div >
  );
}

export default App;
