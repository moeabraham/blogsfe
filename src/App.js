import './App.css';
import {Routes, Route,Outlet} from "react-router-dom"; 
import Post from "./components/Post";
import Header from './components/Header';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './components/DeletePost';
import PostPage from './pages/PostPage';

import {UserContextProvider} from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
          <Route path="/" element={<Layout />} >   
                <Route  index element={<IndexPage />  } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/edit/:id"  element={<EditPost />} />
                {/* <Route path="/delete/:id" element={<DeletePost />} /> */}
          </Route>
      </Routes>
    </UserContextProvider>
    
  
  );
}

export default App;
