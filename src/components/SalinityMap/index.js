import React from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { StaticMap } from "react-map-gl";
import { MapView } from "@deck.gl/core";

//Hooks
import { useWorldGeoJsonFetch } from "../../hooks/useWorldGeoJsonFetch";

//Styles
import { Wrapper, MapHeading } from "./SalinityMap.styles";

const SalinityMap = ({dataUrl, colorCode}) => {
  const INITIAL_VIEW_STATE = {
    latitude: 13.96,
    longitude: 82.02,
    zoom: 3,
    minZoom: 0,
    maxZoom: 8,
  };

  const mainMapView = new MapView({
    id: "main",
    controller: true,
  });

  const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

  const geoJson = useWorldGeoJsonFetch();

  const colorSalt = [[34,44,106,[1]], [92,163,92,[1]], [122,210,48,[1]], [210,237,46,[1]], [213,172,43,[1]],
  [186,122,42,[1]], [161,81,48,[1]]];

  const colorTemp = [[6, 50, 10, [1]], [54, 129, 186, [1]], [126, 184, 215, [1]], [207, 228, 239, [1]], [248, 244, 242, [1]],
  [252, 211, 188, [1]], [233, 139, 110, [1]], [196, 59, 60, [1]], [115, 4, 33, [1]]];

  if (geoJson === null) {
    return <></>;
  }

  const layers = [
    // new GeoJsonLayer({
    //   data: "/data/earth-seas-10km.geo.json",
    //   stroked: true,
    //   filled: false,
    //   lineWidthMinPixels: 1
    // }),
    new HeatmapLayer({
      data: dataUrl,
      id: "heatmp-layer",
      pickable: true,
      getPosition: (d) => [d[1], d[0]],
      getWeight: (d) => d[2],
      radiusPixels: 10,
      intensity: 1,
      threshold: 0.1,
      colorRange: colorCode === 0 ? colorSalt: colorTemp,
      onClick: (info) => console.log(info),
      onHover: (info) => console.log(info)
    }),
  ];

  return (
    <Wrapper>
      <DeckGL
        controller={true}
        layers={layers}
        initialViewState={INITIAL_VIEW_STATE}
        pickingRadius={5}
        views={mainMapView}
        width="60vw"
        height="85vh"
        style={{ top: "10vh", left: "1vw" }}
      >
        {/* <StaticMap reuseMaps mapStyle={MAP_STYLE} preventStyleDiffing={true} /> */}
      </DeckGL>
    </Wrapper>
  );
};

export default SalinityMap;