import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GOOGLE_API_KEY } from '../../environments';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { useRef, useState } from 'react';
import MapViewDirections from "react-native-maps-directions";


const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 49.26444,
  longitude: -123.24987,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}


function InputAutocomplete({ label, placeholder, onPlaceSelected, }) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details, GooglePlaceDetail | null);
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </>
  );
}

export default function Map() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const mapRef = useRef(null)
  const [showDirections, setShowDirections] = useState(false);


  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };



  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details ? details.geometry.location.lat : 0,
      longitude: details ? details.geometry.location.lng : 0,
    };
    set(position);
    moveTo(position);
  };

  // const onPlaceSelected = (details, flag) => {
  //   const set = flag === "origin" ? setOrigin : setDestination;
  //   const position = {
  //     latitude: details && details.geometry && details.geometry.location && details.geometry.location.lat ? details.geometry.location.lat() : 0,
  //     longitude: details && details.geometry && details.geometry.location && details.geometry.location.lng ? details.geometry.location.lng() : 0,
  //   };
  //   set(position);
  //   moveTo(position);
  // };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}>

        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeWidth={4}
            strokeColor="red"
            mode={'WALKING'}
          />

        )}

      </MapView>
      <View style={styles.searchContainer}>
        <InputAutocomplete label="Origin"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "origin");
          }} />
        <InputAutocomplete label="Origin"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination");
          }} />
        <TouchableOpacity onPress={() => setShowDirections(true)}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
});
