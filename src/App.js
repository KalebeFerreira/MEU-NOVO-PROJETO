import Header from './components/Header';
import Hero from './components/Hero';
import TrabalhosRealizados from './components/TrabalhosRealizados';
import Footer from './components/Footer';
const trabalhos = [
  {
    imgSrc: "https://via.placeholder.com/300",
    title: "Doação de brinquedo em Taguatinga",
    description: "Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica."
  },
  {
    imgSrc: "https://via.placeholder.com/300",
    title: "Distribuição de alimentos",
    description: "Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica."
  },
  {
    imgSrc: "https://via.placeholder.com/300",
    title: "Festa de natal para crianças de periferia",
    description: "Lorem ipsum é simplesmente uma simulação de texto da indústria tipográfica."
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TrabalhosRealizados trabalhos={trabalhos} />
      <Footer />
    </div>
  );
};

export default App;