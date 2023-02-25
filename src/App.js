import './App.css';
import RectGradiant from './assets/svg/rect_gradiant.svg';
import './assets/css/fonts.css';
import MenuBar from './components/MenuBar';
import HomeView from './components/HomeView';
import ProjectView from './components/ProjectView';

function App() {
  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${RectGradiant})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', height: '100% !important;',
      }}
    >
      <MenuBar />
      <HomeView />
      <ProjectView />

    </div>
  );
}

export default App;
