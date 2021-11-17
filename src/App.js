import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Contact from './Pages/Contact Page/Contact/Contact';
import Explore from './Pages/Explore page/Explore/Explore';
import Home from './Pages/Home Page/Home/Home';
import Login from './Pages/Login Page/Login/Login';
import SignUp from './Pages/Login Page/Signup/SignUp';
import Purchage from './Pages/Purchage Page/Purchage/Purchage';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/purchage/:name">
              <Purchage />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
