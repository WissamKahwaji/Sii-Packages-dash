import React, { Suspense, lazy } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import App from "./App";
import Services from "./pages/services";
import AboutUs from "./pages/about-us";
import Pricing from "./pages/pricing/Pricing";
import OurClients from "./pages/our-clients";
import ClientDerails from "./pages/our-clients/ClintesDetails";
import PackageDetails from "./pages/pricing/PackageDetails";
import AddSample from "./pages/samples/AddSample";
import UnAuthorized from "./pages/unAuthorized";
import SignInPage from "./pages/signin";

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={localStorage.getItem("token") ? <App /> : <UnAuthorized />}
        >
          <Route path="services" element={<Services />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="services/pricing/:id" element={<Pricing />}>
            <Route
              path={`services/pricing/:id/samples`}
              element={<AddSample />}
            ></Route>
          </Route>
          <Route
            path="services/pricing/:id/package/:id"
            element={<PackageDetails />}
          ></Route>
          <Route
            path="services/pricing/package"
            element={<PackageDetails />}
          ></Route>
          <Route path="our-clients" element={<OurClients />}></Route>
          <Route
            path={`our-clients/client-details`}
            element={<ClientDerails />}
          ></Route>
          <Route
            path={`our-clients/client-details/:id`}
            element={<ClientDerails />}
          ></Route>
          <Route
            path={`services/pricing/:id/samples`}
            element={<AddSample />}
          ></Route>
        </Route>
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default Routes;
