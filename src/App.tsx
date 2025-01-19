import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import FrontEnd from "./pages/Front-End";
import CoWorkersPage from "./pages/CoworkersPage"; 
import "./App.css";

const BackEndPage = () => <h1>Back-End Department</h1>;
const QAPage = () => <h1>Quality Assurance</h1>;
const HRPage = () => <h1>Human Resource</h1>;
const UIUXPage = () => <h1>UI/UX Designer</h1>;
const FinancePage = () => <h1>Financial Officer</h1>;
const ProductManagerPage = () => <h1>Product Manager</h1>;

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<h1>Welcome to the Digitinary</h1>} />
          <Route path="/front-end" element={<FrontEnd />} />
          <Route path="/back-end" element={<BackEndPage />} />
          <Route path="/qa" element={<QAPage />} />
          <Route path="/hr" element={<HRPage />} />
          <Route path="/ui-ux" element={<UIUXPage />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/product-manager" element={<ProductManagerPage />} />
          <Route path="/co-workers" element={<CoWorkersPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
