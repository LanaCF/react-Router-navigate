import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Layout from "./components/Layout";
import { CreateNewPost, Login, Page404, SinglePost } from "./pages";
import { AuthRequire } from "./hoc/AuthRequire";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path="react-Router-navigate" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="blog" element={ <Blog /> } />
        <Route path="blog/:id" element={ <SinglePost /> } />

        <Route path="blog/new" element={ 
          <AuthRequire>
            <CreateNewPost /> 
          </AuthRequire>}
        />

        <Route path="contacts" element={ <Contacts /> } />
        <Route path="login" element={ <Login /> } /> 

        <Route path="*" element={ <Page404 /> } />
      </Route>
    </Routes>
  );
}

export default App;

