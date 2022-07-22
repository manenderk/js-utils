import "./App.scss";
import { Link, Route, Routes } from 'react-router-dom';
import Sidbar from "./Layouts/Sidbar";
import MainPage from "./Pages/MainPage";
import BootstrapPage from "./Pages/BootstrapPage";
import BootstrapModalPage from "./Pages/Bootstrap/BootstrapModalPage";

function App() {
  return (
    <>
      {/* partial:../../partials/_navbar.html */}
      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link to="/" className="navbar-brand brand-logo mr-5">
            <h3>JS Utils</h3>
          </Link>
          <Link to="/" className="navbar-brand brand-logo-mini">
            <h4>JS Utils</h4>
          </Link>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span className="icon-menu" />
          </button>
          
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="icon-menu" />
          </button>
        </div>
      </nav>
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        
        <Sidbar />
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
            <Routes>
              <Route path="/bootstrap/modals" element={<BootstrapModalPage />} />
            </Routes>
          </div>
          
        </div>
        {/* main-panel ends */}
      </div>
      {/* page-body-wrapper ends */}
    </>
  );
}

export default App;
