import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Footer from "./Footer";
import Search from "./Search";
import DayHumidity from "./DayHumidity";
import Temperature from "./Temperature";
import Current from "./Current";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <App />
      <Search />
      <h1>Paris</h1>
      <div className="row">
        <div className="col-6">
          <DayHumidity />
        </div>
        <div className="col-6">
          <Temperature temperature={22} unit = "Metric"/>
        </div>
      </div>

      <Footer />
    </div>
  </StrictMode>
);
