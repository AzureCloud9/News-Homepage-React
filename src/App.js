import './App.css';
import MenuLogo from './components/MenuLogo';
import MainSection from './components/MainSection';
import NewSection from './components/NewSection'
import BlogSection from './components/BlogSection';

function App() {
  return (
    <div className="App">
      <div className='pageLayout'>
        <MenuLogo/>
        <MainSection/>
        <NewSection/>
        <BlogSection/>
      </div>
    </div>
  );
}

export default App;
