import "ag-grid-enterprise";

import "../shared/assets/fonts/fonts.css";
import "./App.css";

import { LicenseManager } from "ag-grid-enterprise";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Content from "./Content/Content";
import { executorRoutersData, routersData } from "./data";
import { SiderItemType } from "../widgets/Sidebar/types/types";
import Page404 from "../pages/Program/Page404/Page404";
import { useEffect, useMemo, useState } from "react";
import { UserContext } from "../shared/model/UserContext";
import LoadingPage from "../pages/Program/LoadingPage/LoadingPage";

LicenseManager.setLicenseKey(
  "BOARD4ALL_NDEwMjM1MTIwMDAwMA==8f4481b5cc626ad79fe91bc5f4e52e3d",
);

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState<boolean>(true);
  const [role, setRole] = useState<number>(3);

  useEffect(() => {
    // Симуляция загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Замените на реальный запрос данных

    return () => clearTimeout(timer);
  }, []);

  const handleFadeOutComplete = () => {
    setShowLoadingScreen(false);
  };

  const getAllRoutes = (routes: SiderItemType[], basePath: string = "") => {
    let allRoutes: SiderItemType[] = [];

    routes.forEach((route) => {
      const fullPath = `${basePath}${route.path}`;
      allRoutes.push({ path: fullPath, element: route.element });

      if (route.children) {
        allRoutes = allRoutes.concat(getAllRoutes(route.children, fullPath));
      }
    });

    return allRoutes;
  };

  const allRoutes = useMemo(
    () =>
      role === 3
        ? getAllRoutes(executorRoutersData)
        : getAllRoutes(routersData),
    [routersData, role],
  );

  return (
    <div>
      {/* <React.StrictMode> */}
      <UserContext.Provider value={{ role, setRole }}>
        <BrowserRouter>
          {showLoadingScreen && (
            <LoadingPage
              isLoading={isLoading}
              onFadeOutComplete={handleFadeOutComplete}
            />
          )}
          <Routes>
            <Route path="/" element={<Content />}>
              <>
                {allRoutes.map((item, index) => (
                  <Route
                    key={`${item.path}-${index}`}
                    path={item.path}
                    element={item.element}
                  />
                ))}
                <Route path="*" element={<Page404 />} />
              </>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      {/* </React.StrictMode> */}
    </div>
  );
}
