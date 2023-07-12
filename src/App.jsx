import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="App">
      <Header title={'Text Application'} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
