import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Footer from "./Component/Footer/Footer";
import "./index.css";

function App() {
  return (
    <>
      <div className="xs:overflow-x-hidden">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App