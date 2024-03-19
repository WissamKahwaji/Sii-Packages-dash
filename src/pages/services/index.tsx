import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import ServiceCard from "../../components/items/cards/services";
import { useGetCategoriesQuery } from "../../apis/packages/queries";
import LoadingPage from "../loadingPage/LoadingPage";

const Services = () => {
  const theme = useTheme();
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();
  if (isLoading)
    return (
      <div>
        <LoadingPage />
      </div>
    );
  if (isError) return <div></div>;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "capitalize",
          mb: 3,
        }}
      >
        services
      </Typography>
      <Grid container gap={4}>
        {categories &&
          categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box p={1}>
                <ServiceCard category={category} />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Services;
