import React from "react";
import ReactDomServer from "react-dom/server";
import StaticRou from "react-router-dom";
const { StaticRouter } = StaticRou;
import App from "./App";

export function SSRRender(url){
    return ReactDomServer.renderToString(
        <StaticRou location={url}>
            <App />
        </StaticRou>
    )
}