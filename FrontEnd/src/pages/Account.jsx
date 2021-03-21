import React, { Component } from "react";
import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Account.css";
import axios from "axios";
import { personCircle } from "ionicons/icons";

class Account extends Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  state = {
    password: "",
    email: "",
    error: "",
  };

  addPassword = async (e) => {
    await this.setState({
      password: e.target.value,
    });
  };

  addEmail = async (e) => {
    await this.setState({
      email: e.target.value,
    });
  };

  setError = (text) => {
    this.setState({
      error: text,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("loginEmail", this.state.email);
    formData.append("loginPassword", this.state.password);
    const url = "http://localhost/Final_backend/login.php";
    axios
      .post(url, formData)
      .then((res) => {
        if (res.data) {
          //Store the login in state so that the user won't need to login again
          localStorage.setItem("username", res.data);
          localStorage.setItem("login", true);
          localStorage.setItem("email", this.state.email);
          window.location.replace("http://localhost:8100/User");
        } else {
          this.setError("Incorrect email or password");
        }
      })
      .catch((err) => console.log(err));
  };

  clearError = () => {
    this.setError("");
    this.emailInput.current.value = "";
    this.passwordInput.current.value = "";
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-text-center ion-padding-top">
          <IonRow>
            <IonCol>
              <IonIcon
                style={{ fontSize: "70px", color: "#3880ff" }}
                icon={personCircle}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Enter your email Address
                </IonLabel>
                <IonInput
                  type="email"
                  ref={this.emailInput}
                  onIonChange={this.addEmail}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Enter your Password</IonLabel>
                <IonInput
                  type="password"
                  ref={this.passwordInput}
                  onIonChange={this.addPassword}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p style={{ fontSize: "small" }}>
                By clicking LOGIN you agree to our <a href="#">Policy</a>
              </p>
              <IonAlert
                isOpen={!!this.state.error}
                message={this.state.error}
                buttons={[{ text: "okay", handler: this.clearError }]}
              />
              <IonButton expand="block" onClick={this.handleSubmit}>
                Login
              </IonButton>
              <p style={{ fontSize: "medium" }}>
                Don't have an account? <a href="/Register">Sign up!</a>
              </p>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }
}

export default Account;
