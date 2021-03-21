import React, { Component } from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import "./Account.css";
import axios from "axios";
import "./User.css";
import { logOutOutline, addCircleOutline } from "ionicons/icons";

function MyCard(props) {
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

class User extends Component {
  constructor(props) {
    super(props);
    let login = localStorage.getItem("login");
    let email = localStorage.getItem("email");
    let user = localStorage.getItem("username");
    if (login) {
      this.state = {
        showAdd: "",
        showRegister: "hide",
        email: email,
        username: user,
      };
    } else {
      localStorage.removeItem("login");
      window.location.replace("http://localhost:8100/Account");
    }
  }

  handleLogout = () => {
    this.setState({
      showAdd: "",
      showRegister: "hide",
      email: "",
      username: "",
    });
    localStorage.removeItem("login");
    localStorage.removeItem("email");
    window.location.replace("http://localhost:8100/Account");
  };

  componentDidMount() {
    let formData = new FormData();
    formData.append("loginEmail", this.state.email);
    const url = "http://localhost/Final_backend/fatchUserData.php";
    axios
      .post(url, formData)
      // .then((res) => console.log(res.data[0].UserName))
      .then((res) => {
        this.setState({ MyExperience: res.data });
      })
      .catch((err) => console.log(err));
  }

  drawMyCard() {
    console.log(this.state.MyExperience);
    if (this.state.MyExperience) {
      return this.state.MyExperience.map((currentExp) => {
        return <MyCard Exp={currentExp} key={currentExp.Title} />;
      });
    }
  }

  toAddnew() {
    window.location.replace("http://localhost:8100/AddNew");
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={this.toAddnew}>
                <IonIcon icon={addCircleOutline}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={this.handleLogout}>
                <IonIcon icon={logOutOutline} />
              </IonButton>
            </IonButtons>
            <IonTitle>Welcome {this.state.username}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-text-center ion-padding-top">
          <h1>Your Trips So Far</h1>
          <div className={this.state.showAdd}>{this.drawMyCard()}</div>
        </IonContent>
      </IonPage>
    );
  }
}

export default User;
