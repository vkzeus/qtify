import React, { useEffect, useState } from "react";
import { Grid2, Button, CircularProgress, Typography } from "@mui/material"; // Import the necessary MUI components
import CustomCard from "./cardComp.js";

function Section({heading,album}) {
  const [apiData, setApidata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing 5 and 10 albums

  useEffect(() => {
    fetch(`https://qtify-backend-labs.crio.do/albums/${album}`)

      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((result) => {
        setApidata(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const albumsToShow = showAll ? apiData.slice(0, 10) : apiData.slice(0, 5); // Determine which albums to show based on `showAll`

  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      {/* "Top Albums" heading */}
      <Typography variant="h4" style={{ position: "absolute", top: 20, left: 20, color: "white" }}>
        {heading}
      </Typography>

      {/* Button placed at the top-right corner */}
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        {showAll ? (
          <Button variant="contained" color="primary" onClick={() => setShowAll(false)}>
            Collapse
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={() => setShowAll(true)}>
            Show All
          </Button>
        )}
      </div>

      <Grid2 container spacing={2} justifyContent="center" bgcolor={"black"} style={{ paddingTop: "60px" }}>
        {albumsToShow.map((item) => (
          <Grid2 item xs={2.4} key={item.id} marginTop={7}>
            <CustomCard
              image={item.image || "defaultImagePath.jpg"} // Fallback image if `item.image` is undefined
              title={item.title}
              follows={item.follows}
            />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}

export default Section;
