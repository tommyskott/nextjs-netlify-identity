import Navbar from "../components/navbar";
import "../styles/style.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
