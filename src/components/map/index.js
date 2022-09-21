import React, { useRef, useState, useEffect, useMemo } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./placesAutocomplete";
import Geocode from "react-geocode";
import { usePosition } from "./usePosition";

const libraries = ["places"];

const Map = () => {
  const { latitude: lat, longitude: lng, error } = usePosition();
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected({ lat, lng });
    if (lat !== undefined) {
      var timer = setTimeout(() => {
        markerSetOn();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [lat, lng]);
  const [zoom, setZoom] = useState(10);
  const [markedAddress, setMarkedAddress] = useState("");
  const [defaultLocation, setDefaultLocation] = useState("");
  const [map, setMap] = useState(null);
  const [markerStat, setmarkerStat] = useState(false);
  console.log(markerStat);
  function markerSetOn() {
    setmarkerStat(true);
  }

  const formik = useFormik({
    initialValues: {
      Map: {},
    },
    validationSchema: Yup.object({
      Map: Yup.object("").shape({
        lat: Yup.string().required("Select your location in the map"),
        lng: Yup.string().required("Select your location in the map"),
      }),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU",
    libraries,
  });

  Geocode.setApiKey("AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU");

  console.log(formik.values);

  const GetDefaultLocation = () => {
    Geocode.fromLatLng(selected?.lat, selected?.lng).then(
      (response) => {
        setDefaultLocation(response.results[0].formatted_address);
        setMarkedAddress(response.results[0].formatted_address);
        console.log(defaultLocation);
      },

      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    GetDefaultLocation();
  }, []);

  function markerChange() {
    Geocode.fromLatLng(selected.lat, selected.lng).then(
      (response) => {
        setMarkedAddress(response.results[0].formatted_address);
        console.log(markedAddress);
      },

      (error) => {
        console.error(error);
      }
    );
  }
  const defaultMapOptions = {
    fullscreenControl: false,
  };

  //Paste this shit in App.css
  // .map{
  //   width: 30rem;
  //   height: 30rem;
  // }

  return (
    <>
      {/* <Navbar /> */}
      <div
        style={{ marginTop: "6em" }}
        className={`container d-flex justify-content-center`}
      >
        <div className="row mb-2">
          <div>
            {/* <div className={`col-lg-6 col-md-10 col-sm-10 px-5 pb-1 pt-3 ` }> */}
            <form onSubmit={formik.handleSubmit}>
              <div>
                <div>
                  {isLoaded ? (
                    <>
                      <div className="d-flex">
                        <PlacesAutocomplete
                          markerSetOn={markerSetOn}
                          markedAddress={markedAddress}
                          setSelected={setSelected}
                        />
                        <button
                          onClick={GetDefaultLocation}
                          className="btn ms-5"
                        >
                          Location
                        </button>
                      </div>
                      <div
                        className="mt-3"
                        style={{
                          width: "30rem",
                          border: "1px solid black",
                          height: "30rem",
                        }}
                      >
                        <GoogleMap
                          zoom={16}
                          center={selected}
                          mapContainerClassName={"map"}
                          onLoad={(map) => {
                            setMap(map);
                          }}
                        >
                          {markerStat && (
                            <Marker
                              draggable={true}
                              onDragEnd={(e) => {
                                markerChange();
                                setSelected({
                                  lat: e.latLng.lat(),
                                  lng: e.latLng.lng(),
                                });
                                formik.setFieldValue("Map", selected);
                              }}
                              position={selected}
                            />
                          )}
                        </GoogleMap>
                      </div>
                    </>
                  ) : (
                    <p>Map Loading</p>
                  )}
                  <p>{defaultLocation}</p>
                  {formik.errors.Map && formik.touched.Map && (
                    <div className="d-flex align-items-center text-danger mt-2">
                      <i className="ri-error-warning-line me-1  "></i>
                      <span>{formik.errors.Map.lat}</span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
