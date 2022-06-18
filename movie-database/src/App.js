// Import Halaman Home
import Home from "./pages/Home";
// Import Routes dan Route dari React Router
import { Route, Routes } from "react-router-dom";
import Create from "./pages/movie/Create";
import Popular from "./pages/movie/Popular";
import NowPlaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./layout";
// Import Theme Provider
import theme from "./utils/constant/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";

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
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </>
  );
}

export default App;
