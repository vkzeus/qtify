import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, IconButton } from "@mui/material";
import CustomCard from "./cardComp.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";


function Section({ heading, apiUrl }) {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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

  const itemsPerPage = 7; // Number of cards to show at a time
  const totalItems = apiData.length;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < totalItems) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const itemsToDisplay = showAll
    ? apiData
    : apiData.slice(currentIndex, currentIndex + itemsPerPage);

  if (loading) {
    return (
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <CircularProgress color="primary" />
      </div>
    );
  }

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

      {/* Show All / Collapse Button */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 10, // Ensure button stays on top
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setShowAll(!showAll);
            setCurrentIndex(0); // Reset index when toggling
          }}
        >
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </div>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        bgcolor={"black"}
        style={{ paddingTop: "60px", position: "relative" }}
      >
        {/* Left Arrow */}
        {!showAll && currentIndex > 0 && (
          <IconButton
            data-testid="slider-prev"
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              zIndex: 1,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}

        {/* Cards */}
        {itemsToDisplay.map((item, index) => (
          <Grid
            item
            xs={1.714}
            key={item.id || `${item.title}-${index}`} // Ensure a stable key
            data-testid="album-card"
          >
            <CustomCard
              image={item.image || "defaultImagePath.jpg"}
              title={item.title}
              follows={item.follows}
            />
          </Grid>
        ))}

        {/* Right Arrow */}
        {!showAll && currentIndex + itemsPerPage < totalItems && (
          <IconButton
            data-testid="slider-next"
            onClick={handleNext}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              zIndex: 1,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Grid>
    </div>
  );
}

export default Section;
