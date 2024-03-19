import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditCategoryInfoMutation,
  useGetCategoryPackagesQuery,
} from "../../apis/packages/queries";
import LoadingPage from "../loadingPage/LoadingPage";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import PackageCard from "../../components/items/cards/packages";
import { Form, Formik, FormikHelpers } from "formik";
import { Category } from "../../apis/packages/type";
import LoadingButton from "../../components/items/buttons/loadingButton";
import AddIcon from "@mui/icons-material/Add";
import { IdParams } from "./type";
import SampleCard from "../../components/items/cards/samples";

const Pricing = () => {
  const navigate = useNavigate();
  const { id } = useParams<IdParams>();

  const {
    data: category,
    isLoading,
    isError,
  } = useGetCategoryPackagesQuery(id);

  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");

  const initialValues: Category = {
    _id: id,
    description_ar: category?.description_ar ?? "",
    description_en: category?.description_en ?? "",
    name_ar: category?.name_ar ?? "",
    name_en: category?.name_en ?? "",
    packages: [],
    samples: [],
    hasSubcategories: category?.hasSubcategories ?? false,
    subcategories: [],
  };
  const { mutate: editCategory } = useEditCategoryInfoMutation();
  if (isLoading)
    return (
      <div>
        <LoadingPage />
      </div>
    );
  if (isError) return <div></div>;

  const handleSubmit = (
    values: Category,
    { setSubmitting }: FormikHelpers<Category>
  ) => {
    editCategory(values, {
      onSettled() {
        setSubmitting(false);
      },
    });
  };

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
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
        {category?.name_en}
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
            <Grid container gap={4}>
              <Grid container justifyContent={"center"} gap={3}>
                {" "}
                <Grid xs={12} md={5}>
                  <TextField
                    name="name_en"
                    fullWidth
                    label={"name in en"}
                    value={values.name_en}
                    onChange={handleChange}
                    error={touched.name_en && !!errors.name_en}
                    helperText={touched.name_en && errors.name_en}
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
                    name="name_ar"
                    fullWidth
                    label={"name in ar"}
                    value={values.name_ar}
                    onChange={handleChange}
                    error={touched.name_ar && !!errors.name_ar}
                    helperText={touched.name_ar && errors.name_ar}
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
              </Grid>
              <Grid container justifyContent={"center"} gap={3}>
                <Grid xs={12} md={5}>
                  <TextField
                    name="description_en"
                    fullWidth
                    multiline
                    label={"description in en"}
                    value={values.description_en}
                    onChange={handleChange}
                    error={touched.description_en && !!errors.description_en}
                    helperText={touched.description_en && errors.description_en}
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
                    name="description_ar"
                    fullWidth
                    multiline
                    label={"description in ar"}
                    value={values.description_ar}
                    onChange={handleChange}
                    error={touched.description_ar && !!errors.description_ar}
                    helperText={touched.description_ar && errors.description_ar}
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
      <Box sx={{ height: "30px" }}></Box>
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textTransform: "capitalize",
          mb: 3,
        }}
      >
        Packages
      </Typography>
      {category?.hasSubcategories && (
        <Grid container justifyContent="center" gap={2}>
          {category.subcategories &&
            category.subcategories.map(subcategory => (
              <Grid item key={subcategory._id}>
                <Button
                  variant="outlined"
                  color={"primary"}
                  onClick={() => setSelectedSubcategory(subcategory._id ?? "")}
                >
                  {subcategory.name_en}
                </Button>
              </Grid>
            ))}
        </Grid>
      )}
      {category?.hasSubcategories && category.hasSubcategories === true ? (
        <>
          {selectedSubcategory !== "" ? (
            <Grid item xs={6} textAlign="end">
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  navigate("/services/pricing/package", {
                    state: {
                      categoryId: category?._id,
                      subId: selectedSubcategory,
                    },
                  })
                }
              >
                <AddIcon /> Add
              </Button>
            </Grid>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <Grid item xs={6} textAlign="end">
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                navigate("/services/pricing/package", {
                  state: {
                    categoryId: category?._id,
                  },
                })
              }
            >
              <AddIcon /> Add
            </Button>
          </Grid>
        </>
      )}
      <Grid container gap={4}>
        {selectedSubcategory &&
          category?.subcategories &&
          category?.subcategories
            .find(subcategory => subcategory._id === selectedSubcategory)
            ?.packages.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box p={1}>
                  <PackageCard packageInfo={item} />
                </Box>
              </Grid>
            ))}
        {!category?.hasSubcategories &&
          category?.packages.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box p={1}>
                <PackageCard key={index} packageInfo={item} />
              </Box>
            </Grid>
          ))}
      </Grid>
      <Box sx={{ height: "30px" }}></Box>
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textTransform: "capitalize",
          mb: 3,
        }}
      >
        Samples
      </Typography>
      <Grid container gap={4}>
        {category?.hasSubcategories &&
          category?.subcategories &&
          category?.subcategories
            .find(subcategory => subcategory._id === selectedSubcategory)
            ?.samples.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box p={1}>
                  <SampleCard
                    key={index}
                    name={item.name}
                    categoryId={category._id}
                    subId={selectedSubcategory}
                  />
                </Box>
              </Grid>
            ))}
        {!category?.hasSubcategories &&
          category?.samples &&
          category.samples.length > 0 &&
          category.samples.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box p={1}>
                <SampleCard name={item.name} categoryId={category._id} />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
