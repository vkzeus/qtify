import React, { useEffect, useState } from "react";
import { Grid, Button, CircularProgress, Typography } from "@mui/material";
import CustomCard from "./cardComp.js";

function Section({ heading, apiUrl }) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch data from the passed API URL
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setApiData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <CircularProgress color="primary" />
      </div>
    );
  }

  const itemsToDisplay = showAll ? apiData.slice(0, 10) : apiData.slice(0, 7);

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      <Typography
        variant="h4"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "white",
        }}
      >
        {heading}
      </Typography>

      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowAll(!showAll)} // Toggle showAll on button click
        >
          {showAll ? "Collapse" : "Show All"} {/* Button text changes based on showAll state */}
        </Button>
      </div>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        bgcolor={"black"}
        style={{ paddingTop: "60px" }}
      >
        {itemsToDisplay.map((item, index) => (
          <Grid
            item
            xs={showAll ? 2.4 : 1.714} // Dynamically adjust item width based on showAll state
            key={item.id || index}
          >
            <CustomCard
              image={item.image || "defaultImagePath.jpg"}
              title={item.title}
              follows={item.follows}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Section;
