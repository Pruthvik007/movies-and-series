import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import BackDrop from "./components/common/BackDrop.tsx";
const PageNotFound = React.lazy(() => import("./pages/PageNotFound.tsx"));
const MediaDetailsPage = React.lazy(() => import("./pages/MediaDetailsPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const CategoryMediaPage = React.lazy(
  () => import("./pages/CategoryMediaPage.tsx")
);
const HomePage = React.lazy(() => import("./pages/HomePage"));
const Router = () => {
  return (
    <Suspense fallback={<BackDrop />}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/details/:mediaType/:id"
            element={<MediaDetailsPage />}
          />
          <Route
            path="/media/:mediaType/:category"
            element={<CategoryMediaPage />}
          />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
