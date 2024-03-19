import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  useEditAboutMutation,
  useGetAboutQuery,
} from "../../apis/about/queries";
import { AboutInfo } from "../../apis/about/type";
import { Formik, FormikHelpers } from "formik";
import { editAboutInfo } from "../../apis/about";

const AboutUs = () => {
  const { data: aboutData, isLoading, isError } = useGetAboutQuery();
  const theme = useTheme();

  const initialValues: AboutInfo = {
    _id: aboutData?._id ?? "",
    ourMission: aboutData?.ourMission ?? "",
    ourMission_ar: aboutData?.ourMission_ar ?? "",
    ourValues: aboutData?.ourValues ?? "",
    ourValues_ar: aboutData?.ourValues_ar ?? "",
    ourVision: aboutData?.ourVision ?? "",
    ourVision_ar: aboutData?.ourVision_ar ?? "",
  };

  const { mutate: editAbout } = useEditAboutMutation();

  const handleUpdateAboutInfo = (
    values: AboutInfo,
    { setSubmitting }: FormikHelpers<AboutInfo>
  ) => {
    editAbout(values, {
      onSettled() {
        setSubmitting(false);
      },
    });
  };

  if (isLoading) return <div></div>;
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
        about us
      </Typography>
      <Formik onSubmit={handleUpdateAboutInfo} initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    padding: theme.spacing(2),
                    marginTop: theme.spacing(3),
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      marginBottom: theme.spacing(2),
                    }}
                  >
                    Our Mission
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    name="ourMission"
                    label="out mission"
                    value={values.ourMission}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    name="ourMission_ar"
                    label="our Mission in arabic"
                    value={values.ourMission_ar}
                    onChange={handleChange}
                    sx={{ marginTop: theme.spacing(2) }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                        direction: "rtl",
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    padding: theme.spacing(2),
                    marginTop: theme.spacing(3),
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      marginBottom: theme.spacing(2),
                    }}
                  >
                    Our Vision
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    name="ourVision"
                    label="our vision"
                    value={values.ourVision}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    name="ourVision_ar"
                    label="our vision in arabic"
                    value={values.ourVision_ar}
                    onChange={handleChange}
                    sx={{ marginTop: theme.spacing(2) }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                        direction: "rtl",
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    padding: theme.spacing(2),
                    marginTop: theme.spacing(3),
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      marginBottom: theme.spacing(2),
                    }}
                  >
                    Our Values
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    name="ourValues"
                    label="our values"
                    value={values.ourValues}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    name="ourValues"
                    label="our values in arabic"
                    value={values.ourValues_ar}
                    onChange={handleChange}
                    sx={{ marginTop: theme.spacing(2) }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                        direction: "rtl",
                      },
                    }}
                    InputProps={{
                      sx: {
                        color: "white",
                        direction: "rtl",
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "center", marginTop: theme.spacing(3) }}>
              <Button type="submit" variant="contained">
                Save Changes
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AboutUs;
