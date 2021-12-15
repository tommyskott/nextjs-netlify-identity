import { AuthContextProvider } from "../components/AuthContext";
import Navbar from "../components/Navbar";
import "../styles/style.css";

function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default App;
