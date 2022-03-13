import { useState, useEffect } from "react";

//Resources
var geoJsonData = require("../resources/MapData/WorldMap.geojson")

export const useWorldGeoJsonFetch = () => {
    const [geoJson, setGeoJson] = useState(null);

    useEffect(() => {
        setGeoJson(geoJsonData);
    }, []);

    return {geoJson};
};