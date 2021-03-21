import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { homeOutline, mapOutline, personCircleOutline } from "ionicons/icons";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Account from "./pages/Account";
import Register from "./pages/Register";
import User from "./pages/User";
import AddNew from "./pages/AddNew";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          {/* Setting up all the route here */}
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/Explore" component={Explore} />
          <Route path="/Account" component={Account} />
          <Route path="/Register" component={Register} />
          <Route path="/User" component={User} />
          <Route path="/AddNew" component={AddNew} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
        </IonRouterOutlet>
        {/* Setting up where the icon in the footer links to */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Explore" href="/Explore">
            <IonIcon icon={mapOutline} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Account" href="/Account">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
