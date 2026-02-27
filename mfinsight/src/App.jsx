import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import HomePage from "./pages/HomePage.jsx";
import HomestaysPage from "./pages/HomestaysPage.jsx";
import AttractionsPage from "./pages/AttractionsPage.jsx";
import GuidesPage from "./pages/GuidesPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import HostPage from "./pages/HostPage.jsx";
import TouristPage from "./pages/TouristPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import AnalyticsPage from "./pages/AnalyticsPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";

const pageMap = {
  home: HomePage,
  homestays: HomestaysPage,
  attractions: AttractionsPage,
  guides: GuidesPage,
  admin: AdminPage,
  host: HostPage,
  tourist: TouristPage,
  guide: GuidePage,
  analytics: AnalyticsPage,
  bookings: BookingsPage,
  reviews: ReviewsPage,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const PageComponent = pageMap[activePage] || HomePage;
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", background: "#f8fafc" }}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflowX: "hidden" }}>
        <PageComponent setActivePage={setActivePage} />
      </main>
    </div>
  );
}
