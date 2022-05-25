// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Home from "./pages/Home";
import Create from "./pages/movie/Create";
import Popular from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./layout";
// Import Theme Provider
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constant/theme";
import GlobalStyle from "./components/GlobalStyle";




function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<Create />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/now" element={<NowPlaying />} />
          <Route path="/movie/top" element={<TopRated />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
