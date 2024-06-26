import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Modal, ScrollView, Pressable } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GOOGLE_API_KEY } from '../../environments';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';

import { startTransition, useRef, useState } from 'react';

import MapViewDirections from "react-native-maps-directions";
import TrailsCard from '../components/TrailsCard';
import BottomNav from './BottomNav';




const { width, height } = Dimensions.get("window");


const BottomDrawer = ({ children, isOpen, onClose }) => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.button}>
        <Text style={styles.buttonText}>Close Drawer</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={onClose}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.4 }]}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {children}
            {/* Your content goes here */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

  ;



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
          //console.log(data, details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </>
  );
}


export default function Map({ navigation }) {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const mapRef = useRef(null)
  const [showDirections, setShowDirections] = useState(false);
  const [latLong, setLatLong] = useState(null);




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
    setLatLong(position);
    set(position);
    moveTo(position);
  };

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };


  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        mapType='hybrid'
      >

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
        <InputAutocomplete label="Where?"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "origin");
          }} />
        {/* <InputAutocomplete label="Origin"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination");
          }} /> */}
        {/* <TouchableOpacity onPress={() => {
        handleOpenBottomSheet();
        setShowDirections(true)
      }}>
        <Text>Enter</Text>
      </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => {
                handleOpenBottomSheet(); // Call the handleOpenBottomSheet function here
                setShowDirections(true);
            }}>
                <Text>Enter</Text>
            </TouchableOpacity>
      </View> */}
        <TouchableOpacity onPress={() => {
          handleOpenBottomSheet();
          setShowDirections(true);
        }}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
      <Pressable style={styles.kim} onPress={() => {
        if (latLong && latLong.latitude && latLong.longitude) {
          console.log(latLong);
          navigation.navigate('Weather', { latitude: latLong.latitude, longitude: latLong.longitude });
        }
      }}>
        <Text> press here</Text>
      </Pressable>
      <BottomDrawer isOpen={isBottomSheetOpen} onClose={handleCloseBottomSheet}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.drawerContent}>
            <Pressable onPress={() => {
              setIsBottomSheetOpen(false);
              if (latLong && latLong.latitude && latLong.longitude) {
                console.log(latLong);
                navigation.navigate('Trail', { latitude: latLong.latitude, longitude: latLong.longitude });
              }
            }}>
              <TrailsCard
                title="Grouse Grind Trail"
                time="2.5"
                distance="2.5"
                elevation="800"
                sideText="Mother Nature's Stairmaster"
                difficulty="HARD"
              />
            </Pressable>
            <TrailsCard
              title="BCMC Trail"
              time="2.5"
              distance="2.9"
              elevation="800"
              sideText="Steep uphill climb through second-growth and old-growth forest"
              difficulty="HARD"
            />
            <TrailsCard
              title="Grouse Grind Trail"
              time="2.5"
              distance="2.5"
              elevation="800"
              sideText="Mother Nature's Stairmaster"
              difficulty="INTERMEDIATE"
            />
            <TrailsCard
              title="Flint & Feather Trail"
              time="3.5"
              distance="3.7"
              elevation="900"
              sideText="Mother Nature's Stairmaster"
              difficulty="INTERMEDIATE"
            />
            {/* <Text style={styles.drawerTitle}>Directions</Text> */}
            {/* <Text>Start: {origin ? `${origin.latitude}, ${origin.longitude}` : 'Select origin'}</Text>
                        <Text>Destination: {destination ? `${destination.latitude}, ${destination.longitude}` : 'Select destination'}</Text> */}
            {/* <TouchableOpacity onPress={() => setShowDirections(!showDirections)}>
                            <Text style={styles.toggleDirectionsButton}>
                                {showDirections ? 'Hide Directions' : 'Show Directions'}
                            </Text>
                        </TouchableOpacity> */}
            {/* Additional controls or information can go here */}
          </View>
        </ScrollView>
      </BottomDrawer>
      <BottomNav/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  kim: {
    marginBottom: 50
  },
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  },
  scrollContainer: {


  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,

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
  lineContainer: {
    width: '100%',
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  bottomSheet: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'start',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 23,
    // paddingHorizontal: 25,
    bottom: 0,
    borderWidth: 1,
    borderColor: 'red'
  },
  content: {
    paddingVertical: 16,
  }
});
