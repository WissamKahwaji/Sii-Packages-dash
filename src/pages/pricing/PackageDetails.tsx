import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IdParams } from "./type";
import { Feature, Package } from "../../apis/packages/type";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FieldArray, Form, Formik, FormikHelpers } from "formik";
import LoadingButton from "../../components/items/buttons/loadingButton";
import {
  useAddPackageInfoMutation,
  useAddPackageInfoToSubMutation,
  useEditPackageInfoMutation,
} from "../../apis/packages/queries";

const PackageDetails = () => {
  const { id } = useParams<IdParams>();
  const { state } = useLocation();
  const { packageInfo, categoryId, subId } = state ?? {};
  const { mutate: editPackage } = useEditPackageInfoMutation();
  const { mutate: addPackage } = useAddPackageInfoMutation();
  const { mutate: addPackageToSub } = useAddPackageInfoToSubMutation(subId);
  const initialValues: Package = categoryId
    ? {
        ...(id && { _id: id }),
        title_en: "",
        title_ar: "",
        features: [],
        ...(categoryId && { categoryId: categoryId }),
        isMonthly: false,
        isPopular: false,
        price: 0,
        subTitle_ar: "",
        subTitle_en: "",
      }
    : {
        ...(id && { _id: id }),
        title_en: (packageInfo.title_en && packageInfo.title_en) ?? "",
        title_ar: packageInfo.title_ar ?? "",
        features: packageInfo.features ?? [],
        ...(categoryId && { categoryId: categoryId }),
        isMonthly: packageInfo.isMonthly ?? false,
        isPopular: packageInfo.isPopular ?? false,
        price: packageInfo.price ?? 0,
        subTitle_ar: packageInfo.subTitle_ar ?? "",
        subTitle_en: packageInfo.subTitle_en ?? "",
      };
  console.log(state);
  const handleSubmit = (
    values: Package,
    { setSubmitting }: FormikHelpers<Package>
  ) => {
    subId
      ? addPackageToSub(values, {
          onSettled() {
            setSubmitting(false);
          },
        })
      : categoryId
      ? addPackage(values, {
          onSettled() {
            setSubmitting(false);
          },
        })
      : editPackage(values, {
          onSettled() {
            setSubmitting(false);
          },
        });
  };

  return (
    <Box>
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
        Package Details
      </Typography>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          setFieldValue,
        }) => (
          <Form>
            <Grid container justifyContent={"center"} gap={3}>
              <Grid xs={12} md={5}>
                <TextField
                  name="title_en"
                  fullWidth
                  label={"title_en"}
                  value={values.title_en}
                  onChange={handleChange}
                  error={touched.title_en && !!errors.title_en}
                  helperText={touched.title_en && errors.title_en}
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
              </Grid>
              <Grid xs={12} md={5}>
                <TextField
                  name="title_ar"
                  fullWidth
                  label={"title_ar"}
                  value={values.title_ar}
                  onChange={handleChange}
                  error={touched.title_ar && !!errors.title_ar}
                  helperText={touched.title_ar && errors.title_ar}
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
              </Grid>
              <Grid xs={12} md={5}>
                <TextField
                  name="subTitle_en"
                  fullWidth
                  label={"subTitle_en"}
                  value={values.subTitle_en}
                  onChange={handleChange}
                  error={touched.subTitle_en && !!errors.subTitle_en}
                  helperText={touched.subTitle_en && errors.subTitle_en}
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
              </Grid>{" "}
              <Grid xs={12} md={5}>
                <TextField
                  name="subTitle_ar"
                  fullWidth
                  label={"subTitle_ar"}
                  value={values.subTitle_ar}
                  onChange={handleChange}
                  error={touched.subTitle_ar && !!errors.subTitle_ar}
                  helperText={touched.subTitle_ar && errors.subTitle_ar}
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
              </Grid>
              <Grid xs={12} md={5}>
                <TextField
                  name="price"
                  fullWidth
                  label={"price"}
                  value={values.price}
                  onChange={handleChange}
                  error={touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
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
              </Grid>
              <Grid xs={12} md={2.5}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.isMonthly}
                      onChange={e =>
                        setFieldValue("isMonthly", e.currentTarget.checked)
                      }
                      name="isMonthly"
                      color="primary"
                    />
                  }
                  label="Is Monthly"
                />
              </Grid>
              <Grid xs={12} md={2.3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.isPopular}
                      onChange={e =>
                        setFieldValue("isPopular", e.currentTarget.checked)
                      }
                      name="isPopular"
                      color="primary"
                    />
                  }
                  label="Is Popular"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  sx={{
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    mb: 3,
                  }}
                >
                  Features
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Box
                  sx={{
                    border: "1px solid white",
                    padding: 2,
                    marginBottom: 2,
                  }}
                >
                  <Grid item xs={12}>
                    <FieldArray name="features">
                      {({ push, remove }) => (
                        <>
                          {values.features.map(
                            (item: Feature, index: number) => (
                              <Box
                                sx={{
                                  border: "1px solid white",
                                  padding: 2,
                                  marginBottom: 2,
                                }}
                              >
                                <Grid container spacing={2}>
                                  <Grid item xs={12} md={4}>
                                    <TextField
                                      fullWidth
                                      name={`features.${index}.title_en`}
                                      label="Title En"
                                      value={item.title_en}
                                      onChange={e =>
                                        setFieldValue(
                                          `features.${index}.title_en`,
                                          e.target.value
                                        )
                                      }
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
                                  </Grid>
                                  <Grid item xs={12} md={4}>
                                    <TextField
                                      fullWidth
                                      name={`features.${index}.tital_ar`}
                                      label="Title Ar"
                                      value={item.tital_ar}
                                      onChange={e =>
                                        setFieldValue(
                                          `features.${index}.tital_ar`,
                                          e.target.value
                                        )
                                      }
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
                                  </Grid>
                                  <Grid item xs={12} md={1}>
                                    <IconButton
                                      sx={{ color: "red" }}
                                      onClick={() => remove(index)}
                                    >
                                      <DeleteIcon />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </Box>
                            )
                          )}
                          <Button
                            variant="contained"
                            onClick={() => push({ title_en: "", tital_ar: "" })}
                          >
                            Add Content
                          </Button>
                        </>
                      )}
                    </FieldArray>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent={"center"}>
                  <LoadingButton
                    isSubmitting={isSubmitting}
                    buttonText={"submit"}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PackageDetails;
