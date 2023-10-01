"use client";
import { Place } from "@mui/icons-material";
import { forwardRef, useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import Map, { Marker } from "react-map-gl";

export const RequestMap = forwardRef(function InternalMap(props, ref) {
  const { setValue, watch } = useFormContext();

  const mapValues = useMemo(
    () => ({
      longitude: watch("longitude") || -7.988836792391595,
      latitude: watch("latitude") || 31.62309563018576,
      zoom: watch("zoom") || 11.5,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [watch("longitude"), watch("latitude")],
  );

  return (
    <Map
      ref={ref}
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: mapValues.longitude,
        latitude: mapValues.latitude,
        zoom: mapValues.zoom,
      }}
      onMove={(e) => {
        setValue("longitude", e.viewState.longitude);
        setValue("latitude", e.viewState.latitude);
        setValue("zoom", e.viewState.zoom);
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
      style={{ width: "100%", height: 400 }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
    >
      <Marker
        longitude={mapValues.longitude}
        latitude={mapValues.latitude}
        anchor="bottom"
      >
        <Place
          style={{
            color: "red",
          }}
        />
      </Marker>
    </Map>
  );
});
