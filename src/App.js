import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./components/Common/DataContext";
import { publicRoutes } from "./routes";
function App() {
  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Routes>
            {publicRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                  
                />
              );
            })}
          </Routes>
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;
