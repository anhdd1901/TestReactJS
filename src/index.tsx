import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import vi_VN from "antd/locale/vi_VN";
import Auth from "./Auth/Auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider locale={vi_VN}>
        <Auth />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);
