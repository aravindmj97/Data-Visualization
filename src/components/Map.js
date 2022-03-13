import React, { useState } from "react";

//Material UI
import { Grid } from "@mui/material";

//Components
import SalinityMap from "./SalinityMap";
import ProfileInfo from "./ProfileInfo";

const Map = () => {
  const [dataUrl, setDataUrl] = useState("/data/temp_depth50.json");
  const [colorCode, setColorCode] = useState(0);
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <SalinityMap dataUrl={dataUrl} colorCode={colorCode} />
      </Grid>
      <Grid item xs={4}>
        <ProfileInfo setDataUrl={setDataUrl} setColorCode={setColorCode}/>
      </Grid>
    </Grid>
  </>
  );
};
export default Map;
