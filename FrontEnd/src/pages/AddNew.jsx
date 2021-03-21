import React, { Component } from "react";
import {
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
  IonTextarea,
  IonButtons,
} from "@ionic/react";

import axios from "axios";
import {
  partlySunnySharp,
  refreshCircle,
  checkmarkOutline,
  chevronBackSharp,
} from "ionicons/icons";

class AddNew extends Component {
  //I only use props to clear the field
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.titleInput = React.createRef();
    this.urlInput = React.createRef();
    this.introInput = React.createRef();
  }

  //Setting the state
  state = {
    photourl: "",
    useremail: "",
    content: "",
    title: "",
    error: "",
  };

  //Storing the states
  addUserEmail = async (e) => {
    await this.setState({
      useremail: e.target.value,
    });
  };

  addPhotoURL = async (e) => {
    await this.setState({
      photourl: e.target.value,
    });
  };

  addContent = async (e) => {
    await this.setState({
      content: e.target.value,
    });
  };

  addTitle = async (e) => {
    await this.setState({
      title: e.target.value,
    });
  };

  //Redirect the page
  goBack = () => {
    window.location.replace("http://localhost:8100/User");
  };

  //Sending the data to backend
  handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photourl", this.state.photourl);
    formData.append("useremail", this.state.useremail);
    formData.append("content", this.state.content);
    formData.append("title", this.state.title);
    const url = "http://localhost/Final_backend/addNew.php";
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data);
        // window.location.replace("http://localhost:8100/User");
      })
      .catch((err) => console.log(err));
  };

  clearField = () => {
    this.emailInput.current.value = "";
    this.titleInput.current.value = "";
    this.urlInput.current.value = "";
    this.introInput.current.value = "";
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar onclick={this.goBack}>
            <IonButtons slot="start">
              <IonButton onClick={this.toAddnew}>
                <IonIcon icon={chevronBackSharp}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Add Your Story🌈</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-text-center ion-padding-top">
          <IonRow>
            <IonCol>
              <IonIcon
                style={{ fontSize: "70px", color: "#3880ff" }}
                icon={partlySunnySharp}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="fixed">Email</IonLabel>
                <IonInput
                  type="email"
                  ref={this.emailInput}
                  onIonChange={this.addUserEmail}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="fixed">Title</IonLabel>
                <IonInput
                  type="string"
                  ref={this.titleInput}
                  onIonChange={this.addTitle}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="fixed">Pic URL</IonLabel>
                <IonInput
                  type="url"
                  onIonChange={this.addPhotoURL}
                  ref={this.urlInput}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="fixed">Intro</IonLabel>
                <IonTextarea
                  rows="5"
                  type="string"
                  ref={this.introInput}
                  onIonChange={this.addContent}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-padding">
              <IonButton onClick={this.handleSubmit}>
                <IonIcon slot="start" icon={checkmarkOutline} />
                Submit
              </IonButton>
            </IonCol>
            <IonCol className="ion-padding">
              <IonButton onClick={this.clearField}>
                <IonIcon slot="start" icon={refreshCircle} />
                Reset
              </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }
}

export default AddNew;
