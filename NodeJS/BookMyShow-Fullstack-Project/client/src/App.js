import { Provider } from "react-redux";
import "./App.css";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/Home/Index";
import Login from "./pages/Login/Index";
import Register from "./pages/Register/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
