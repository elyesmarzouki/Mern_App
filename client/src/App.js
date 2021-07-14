import './App.css';
import { Switch, Route } from "react-router-dom"
import LandPage from './pages/LandPage/LandPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import Errors from './pages/Errors/Errors';
import PrivateRoute from './router/PrivateRoute';
import OffersPage from "./pages/OffersPage/OffersPage";
import ApplicationsPage from "./pages/ApplicationsPage/ApplicationsPage";
import ProfilPage from "./pages/ProfilPage/ProfilPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./redux/actions/user";

function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
  dispatch(current())
  })
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/offers" component={OffersPage}/>
        <PrivateRoute path="/applications" component={ApplicationsPage}/>
        <PrivateRoute path="/profil" component={ProfilPage}/>
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
