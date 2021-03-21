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

class Register extends Component {
  //Using props to clear the fields
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.confirmPasswordInput = React.createRef();
  }

  //Setting the state to store the inputs and pass them to back end
  state = {
    password: "",
    email: "",
    name: "",
    confirmPassword: "",
    error: "",
  };

  addPassword = async (e) => {
    await this.setState({
      password: e.target.value,
    });
  };

  addConfirmPassword = async (e) => {
    await this.setState({
      confirmPassword: e.target.value,
    });
  };

  addEmail = async (e) => {
    await this.setState({
      email: e.target.value,
    });
  };

  addUserName = async (e) => {
    await this.setState({
      name: e.target.value,
    });
  };

  setError = (text) => {
    this.setState({
      error: text,
    });
  };

  //Passing the data to back end
  handleSubmit = (e) => {
    if (this.state.password === this.state.confirmPassword) {
      e.preventDefault();
      console.log(this.state.email);
      console.log(typeof this.state.password);
      let formData = new FormData();
      formData.append("email", this.state.email);
      formData.append("password", this.state.password);
      formData.append("username", this.state.name);
      const url = "http://localhost/Final_backend/register.php";
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      this.setError("Password and confirm password does not match");
    }
  };

  clearError = () => {
    this.setError("");
    this.nameInput.current.value = "";
    this.emailInput.current.value = "";
    this.confirmPasswordInput.current.value = "";
    this.passwordInput.current.value = "";
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register</IonTitle>
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
                <IonLabel position="floating">Enter your user name</IonLabel>
                <IonInput
                  type="name"
                  ref={this.nameInput}
                  onIonChange={this.addUserName}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Enter your email address
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
                <IonLabel position="floating">Enter your password</IonLabel>
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
              <IonItem>
                <IonLabel position="floating">Confirm your password</IonLabel>
                <IonInput
                  type="password"
                  onIonChange={this.addConfirmPassword}
                  ref={this.confirmPasswordInput}
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
                Register
              </IonButton>
              <p style={{ fontSize: "medium" }}>
                Already have an account? <a href="/Account">Sign in!</a>
              </p>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }
}

export default Register;
