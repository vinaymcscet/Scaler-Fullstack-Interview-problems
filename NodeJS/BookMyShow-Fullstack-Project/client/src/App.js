import { Provider } from "react-redux";
import "./App.css";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/Home/Index";
import Login from "./pages/Login/Index";
import Register from "./pages/Register/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import Admin from "./pages/Admin/Index";
import Partner from "./pages/Partner/Index";
import Profile from "./pages/User/Index";
import SingleMovie from "./pages/Booking/SingleMovie";
import BookShow from "./pages/Booking/BookShow";
import Forget from "./pages/Forget/Index";
import Reset from "./pages/Reset/Index";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/partner" element={
                <ProtectedRoute>
                  <Partner />
                </ProtectedRoute>
              }
            />
            <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/movie/:id" element={
                <ProtectedRoute>
                  <SingleMovie />
                </ProtectedRoute>
              }
            />
            <Route path="/book-show/:id" element={
                <ProtectedRoute>
                  <BookShow />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
