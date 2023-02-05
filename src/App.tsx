import { Sidebar } from "./components/Sidebar";
import { MainRoutes } from "./Routes";
import "./style.css"

function App() {
  return(
    <div className="app" >
      <Sidebar />
      <MainRoutes />
    </div>
  );
}

export default App;
