import './App.css';
import MainNav from './mainNav';
// import {Gallery, LeftButton, GalleryImage} from './galleryComponent'
import Gallery from './galleryComponent/gallery'

function App() {
  
  return (
    <div className="App">
      
        <MainNav />
        <Gallery/>
        <Gallery/>
        <Gallery/>
        <Gallery/>
        
      
    </div>
  );
}

export default App;
