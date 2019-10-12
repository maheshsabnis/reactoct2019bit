// 1. Import React Object model
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
// 3. Import bootstrap
import "!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css";

import SimpleComponent from "./components/somecomponent.jsx";
import Counter from './hooks/hkcomponent.jsx';
import ObjectComponent from "./newhooks/objectscomponent.jsx";
import UseEffectAjaxComponent from './newhooks/useeffectsajaxservice.jsx';
import DemoLifeCycleComponent from "./traditional/DemoLifeCycleComponent.jsx";
import DemoEffect from "./newhooks/useeffect.jsx";
import MouseMovementComponent from "./traditional/ComponentDidUpdateOnlyOmce.jsx";
import UseEffectHookMouseEvent from "./newhooks/useEffectHookMouseEVent.jsx";
import MouseContainerComponent from './newhooks/MouseContainer.jsx';
ReactDom.render( <MouseContainerComponent/> , document.getElementById("app"));