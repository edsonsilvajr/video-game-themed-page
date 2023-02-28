import { container, section } from './App.css';
import Header from './components/molecules/header/header';
function App() {
  return (
    <div className={container}>
      <Header></Header>
      <section className={section}></section>
    </div>
  );
}

export default App;
