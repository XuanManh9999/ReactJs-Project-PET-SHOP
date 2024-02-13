import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./components/Common/DataContext";
import { publicRoutes, privateRoutes } from "./routes";

import AuthWrapperAdmin from "./utils/AuthWrapperAdmin";

function App() {
  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Routes>
            {/* Public */}
            {publicRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
            {/* Private */}
            {privateRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <AuthWrapperAdmin>{route.component}</AuthWrapperAdmin>
                  }
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
