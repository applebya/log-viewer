import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.css";

import { injectGlobal } from "styled-components";

injectGlobal`
	html,
	body {
		min-height: 100%;
		height: 100%;		
	}

	#root {
		background: radial-gradient(#87AFC7, #368bc1) no-repeat;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: flex;
		min-height: 100%;		
	}

	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900');
	@import url('https://fonts.googleapis.com/css?family=Monoton');

	* {
		font-family: 'Roboto', sans-serif;
	}
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
