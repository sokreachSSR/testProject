import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch } from "react-redux";
import { setPopup } from "../../Redux/slices/PopupSlice";
import { setCompanyLocation } from "../../Redux/slices/companyLocationSlice";

export default function GoogleMaps() {
  const defaultProps = {
    center: {
      lat: 11.556374,
      lng: 104.92821,
    },
    zoom: 15,
  };

  const [selectedLocation, setSelectedLocation] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCompanyLocation(selectedLocation));
  }, [selectedLocation]);

  // google map location selection api handler
  const handleApiLoaded = (map, maps) => {
    var location;

    const marker = new maps.Marker(
      {
        position: location,
        draggable: true,
        map: map,
      },
      []
    );
    // map on click
    map.addListener("click", (event) => {
      location = event.latLng.toJSON();
      marker.setPosition(location);
      setSelectedLocation(marker.getPosition().toJSON());
    });

    // marker on dragend
    marker.addListener("dragend", () => {
      const newPosition = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      };
      marker.setPosition(newPosition);
      setSelectedLocation(newPosition);
    });
  };
  return (
    <div className="mb-12 w-full h-full">
      <div style={{ height: "100%", width: "100%" }} className="relative">
        <div className="flex justify-end p-2 bg-white">
          {/* <button
              onClick={() => dispatch(setPopup("null"))}
              className=" bg-green_custom w-10 h-10 rounded-full hover:bg-icons_color mb-1"
            >
              <p className=" text-center m-1 text-2xl text-white">✕</p>
          </button> */}
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA8ixZTgNLIK2uFt63EfBTiQQA2q_c73dg" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            // style={{ height: "100%", width: "100%" }}
          ></GoogleMapReact>
        </div>
      </div>
    </div>
  );
}
