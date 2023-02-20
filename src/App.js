// import './App.css';
import "./dist/styles.css";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { ErrorPage } from "./Pages/ErrorPage";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
    const { currentUser } = useContext(AuthContext);
    const ProtectRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/login" />;
        }
        return children;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route
                        index
                        element={
                            <ProtectRoute>
                                <Home />
                            </ProtectRoute>
                        }
                        errorElement={<ErrorPage />}
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
