import React from "react";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ProfileInfo = ({setDataUrl, setColorCode}) => {

  const [alignment, setAlignment] = React.useState('/data/salt_depth0.json');

  const handleChange = (event, urlValue) => {
    setAlignment(urlValue);
    setDataUrl(urlValue)
    if(urlValue.match('salt')){
      setColorCode(0);
    }else{
      setColorCode(1);
    }
  };

  return (
    <>
      {/* <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      /> */}
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        style={{ paddingTop: "10vh", paddingRight: "20px" }}
      >
        <ToggleButton value="/data/salt_depth0.json">Sea Surface Salinity</ToggleButton>
        <ToggleButton value="/data/salt_depth50.json">Salinity at 1200m</ToggleButton>
        <ToggleButton value="/data/temp_depth0.json">Sea Surface Temperature</ToggleButton>
        <ToggleButton value="/data/temp_depth50.json">Temperature at 1200m</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ProfileInfo;
