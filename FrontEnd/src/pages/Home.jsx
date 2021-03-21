import React from "react";
//import all the ionic components
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
//import axios to connect front end with back end
import axios from "axios";

//Generate the basic unit of card to hold the information
function Card(props) {
  return (
    <IonCard>
      <img src={props.Exp.PhotoUrl} />
      <IonCardHeader>
        <IonCardSubtitle>Destination</IonCardSubtitle>
        <IonCardTitle>{props.Exp.Title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{props.Exp.Content}</IonCardContent>
    </IonCard>
  );
}

//create a react component
export default class Home extends React.Component {
  //Setting the state, it may not necessary but I want to make sure experience state has a initial value
  state = {
    Experience: [],
  };

  //After all the DOM elements loaded, request data from the server. Since the once the state change
  //the DOM will automaticall regenrate, I can get data after DOM rendered.
  componentDidMount() {
    axios
      .get(`http://localhost/Final_backend/home.php`)
      .then((res) => {
        console.log(res.data);
        this.setState({ Experience: res.data });
      })
      .catch((err) => console.log(err));
  }

  //use the function to pass render every card. Since I need to use the data stored in the state and map each element
  //I have to put this function inside the react component or I won't be able to access it.
  drawCard() {
    return this.state.Experience.map((currentExp) => {
      if (currentExp.PhotoUrl) {
        return <Card Exp={currentExp} key={currentExp.PhotoUrl} />;
      }
    });
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home🏠</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>{this.drawCard()}</IonContent>
      </IonPage>
    );
  }
}
