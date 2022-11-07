import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";
import { AuthUserProvider } from "../firebase/auth/authProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthUserProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthUserProvider>
    </>
  );
}

export default MyApp;
