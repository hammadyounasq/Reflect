import styles from "./style";
import {
  Navbar,
  Hero,
  Service,
  Notes,
  Superpowers,
  Information,
  Hardenedsecurity,
  Meeting,
  UseReflect,
  Price,
  Testimonials,
  Team,
  Footer,
  // Academy,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`px-6 sm:px-10 md:px-10 ${styles.flexCenter} `}>
        <Navbar />
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Service />
          <Notes />
          <Superpowers />
          <Information />
          <Hardenedsecurity />
          <Meeting />
          <UseReflect />
          <Price />
          <Testimonials />
          <Team />
          {/* <Academy /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
