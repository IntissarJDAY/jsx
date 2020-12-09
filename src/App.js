import './App.css';
import nailart from "./nailart.jpg";
import "./style.css";
function App() {
  return (
<><div style={{border:"solid 1px black", maxWidth:"100vw"}}>
<h1 className="title red">Your name here</h1><br/>
<img src="/nails.jpg" style={{width:150}} alt="image1"/><br/>
<img src={nailart} style={{width:150}} alt="image2"/>
</div>
<video style={{width:300, height:250}} controls="true">
<source src="/Motivational video.mp4" type="video/mp4" />
</video>
</>
  );
}

export default App;
