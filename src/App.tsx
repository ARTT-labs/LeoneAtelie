import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Feedback from "./components/Feedback";
//import Catalog from "./components/Catalog";
//import Testimonials from "./components/Testimonials";
//import Steps from "./components/Steps";
//import Contact from "./components/Contact";
//import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-6">
      <Header />
      <Hero />
      <About />
      <Feedback
        items={[
          {
            quote: '"A peça ficou perfeita! Atendimento carinhoso."',
            author: "Maria Clara",
            imageSrc: "src/assets/depo1.jpg",
          },
          {
            quote: '"Presente emocionante, trabalho impecável."',
            author: "Lucas Andrade",
            imageSrc: "src/assets/depo1.jpg",
          },
          {
            quote: '"Acabamento lindo. Voltarei a comprar!"',
            author: "Fernanda Souza",
            imageSrc: "src/assets/depo1.jpg",
          },
          {
            quote: '"Experiência impecável, superou expectativas!"',
            author: "João Pedro",
            imageSrc: "src/assets/depo1.jpg",
          },
        ]}
      />
    </div>
  );
}

export default App;
