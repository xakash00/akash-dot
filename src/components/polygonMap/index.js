import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  GoogleMap,
  useLoadScript,
  LoadScript,
  Polygon,
  Marker,
} from "@react-google-maps/api";
import PlacesAutocomplete from "./placesAutocomplete";
import Geocode from "react-geocode";
import { usePosition } from "./usePosition";

const libraries = ["places"];

const PolygonMap = () => {
  const { latitude: lat, longitude: lng, error } = usePosition();
  const [selected, setSelected] = useState();
  const [markerStat, setmarkerStat] = useState(false);

  const [path, setPath] = useState([
    { lat: 52.52549080781086, lng: 13.398118538856465 },
    { lat: 52.48578559055679, lng: 13.36653284549709 },
    { lat: 52.48871246221608, lng: 13.44618372440334 },
  ]);
  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  // Call setPath with new edited path
  useEffect(() => {
    setSelected({ lat, lng });``
    if (lat !== undefined) {
      var timer = setTimeout(() => {
        markerSetOn();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [lat, lng]);
  function markerSetOn() {
    setmarkerStat(true);
  }

  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map((latLng) => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);

  // Bind refs to current Polygon and listeners
  const onLoad = useCallback(
    (polygon) => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach((lis) => lis.remove());
    polygonRef.current = null;
  }, []);

  console.log("The path state is", path);
  return (
    <>
      <div className="App">
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyAVDzgCl3C4LxYECq149eAYFA_sNyPmpGU"
          language="en"
          region="us"
        >
          <GoogleMap
            mapContainerClassName="App-map"
            center={selected}
            zoom={12}
            version="weekly"
            on
          >
            <Polygon
              // Make the Polygon editable / draggable
              editable
              draggable
              path={path}
              // Event used when manipulating and adding points
              onMouseUp={onEdit}
              // Event used when dragging the whole Polygon
              onDragEnd={onEdit}
              onLoad={onLoad}
              onUnmount={onUnmount}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default PolygonMap;
