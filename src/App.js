import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster, ToastBar } from 'react-hot-toast'
import Login from './components/Login';
import Layout from './components/Layout';
import Home from './components/Home'
import { AuthProvider } from './context/AuthContext';
import PrivateOutlet from './components/PrivateOutlet'
import Signup from './components/Signup';
import Post from './components/Post'
import Profile from './components/Profile';
import User from './components/User';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';


// https://stackoverflow.com/questions/69864165/error-privateroute-is-not-a-route-component-all-component-children-of-rou
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Toaster />
          <Routes>
            {/* <PublicRoute exact path="/login" component={Login} /> */}
            {/* <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
            /> */}
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={ <Signup />} />
            <Route path='/*' element={<PrivateOutlet />}>
              <Route path='home' element={ <Home /> } />
              <Route path='mypage' element={ <Profile /> } />
              <Route path='posts/:id' element={ <Post />} />
              <Route path='users/:id' element={ <User />} />
              <Route path='posts/new' element={ <NewPost />} />
              <Route path='posts/edit/:id' element={ <EditPost />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
