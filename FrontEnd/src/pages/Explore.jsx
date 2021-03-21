import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Explore.css";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

//autocomplete search box
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

//ui dependencies
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

// import the customized google map settings
// from map.tsx(this map setting is from snazzy map)
import map from "./map";

const mapContainerStyle = {
  width: "100vw",
  height: "88.5vh",
};

const center = {
  lat: 42.361145,
  lng: -71.057083,
};

const libraries = ["places"];

const options = {
  //import the map setting here
  styles: map,
  disableDefaultUI: true,
  zoomControl: true,
};

const Explore = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "API key gose HERE",
    libraries,
  });

  const mapRef = React.useRef();

  //create the markers
  const markers = [
    {
      id: 1,
      lat: 42.331143,
      lng: -71.037376,
    },
    {
      id: 2,
      lat: 42.341143,
      lng: -71.047376,
    },
    {
      id: 3,
      lat: 42.351143,
      lng: -71.027376,
    },
    {
      id: 4,
      lat: 42.361143,
      lng: -71.027376,
    },
    {
      id: 5,
      lat: 42.371143,
      lng: -71.007376,
    },
    {
      id: 6,
      lat: 42.311143,
      lng: -71.017376,
    },
  ];

  //use state to determain if the infowindow is open
  const [isOpen, changeOpen] = useState(false);

  //Give each window a ID or they will open at the same time
  const [Id, setId] = useState("");

  //use ref to store map data
  const onMapload = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  //checking error
  if (loadError) return <h1>Loading maps error</h1>;

  if (!isLoaded) return <h1>Loading maps</h1>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explore 🔥</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Search panTo={panTo} />
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
          // onClick={onMapClick}
          onLoad={onMapload}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              //give each marker a lat and a lng
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: "/rocket.svg",
                //the size of the icon that you placed
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                //now the icon will generate in the middle of where you clicked
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => setId(marker.id)}
            >
              {/* display the textbox when clicks on it */}
              {
                // a easy way to omit if condition
                Id === marker.id && (
                  <InfoWindow
                    onCloseClick={() => changeOpen(!isOpen)}
                    position={{ lat: marker.lat, lng: marker.lng }}
                  >
                    <div>
                      <h3>Good Place to Go!</h3>
                      <p>
                        The Lat is {marker.lat} <br />
                        and the lng is {marker.lng}
                      </p>
                    </div>
                  </InfoWindow>
                )
              }
            </Marker>
          ))}
        </GoogleMap>
      </IonContent>
    </IonPage>
  );
};

//this is the search bar function
function Search({ panTo }) {
  //Setting up the search bar(place auto complete is a plug-in that I imported in the begining)
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 42.361145, lng: () => -71.057083 },
      radius: 200 * 1000,
    },
  });

  //Combobox is another plug in
  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disabled={!ready}
          placeholder="Enter an address"
        />

        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Explore;
