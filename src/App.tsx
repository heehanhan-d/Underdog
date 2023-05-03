import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/common/layout";
import { MainPage } from "./pages/MainPage";
import { AboutPage } from "./pages/AboutPage";
import { AISearchPage } from "./pages/AISearchPage";
import { UnderdogsPage } from "./pages/UnderdogsPage";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<MainPage />} path="/" />
                    <Route element={<AboutPage />} path="/" />
                    <Route element={<AISearchPage />} path="/" />
                    <Route element={<UnderdogsPage />} path="/" />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;