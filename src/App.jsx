import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout";
import { SinglePost } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="blog" element={ <Blog /> } />
        <Route path="blog/:id" element={ <SinglePost /> } />
        <Route path="contacts" element={ <Contacts /> } />
        {/* <Route path="*" element={ <Page404 /> } /> */}
      </Route>
    </Routes>
  );
}

export default App;

