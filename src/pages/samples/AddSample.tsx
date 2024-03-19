import React from "react";
import { AddSampleInputProps, IdParams } from "./type";
import { useLocation, useParams } from "react-router-dom";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import ImageDragDropField from "../../components/items/inputs/imageDragDropFeild";
import LoadingButton from "../../components/items/buttons/loadingButton";
import { useAddSampleToCategoryMutation } from "../../apis/packages/queries";

const AddSample = () => {
  const { id } = useParams<IdParams>();
  const { state } = useLocation();
  const { sampleName, subId } = state ?? {};

  const { mutate: addSample } = useAddSampleToCategoryMutation(id ?? "");

  const initialValues: AddSampleInputProps = {
    sampleName: sampleName,
    subId: subId,
  };

  const handleSubmit = (
    values: AddSampleInputProps,
    { setSubmitting }: FormikHelpers<AddSampleInputProps>
  ) => {
    addSample(values, {
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
        Add Sample to {sampleName}
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
              <Grid xs={12} md={10.2}>
                <ImageDragDropField name="img" label="Sample Image" />
              </Grid>{" "}
              <Grid xs={12} md={5}>
                <TextField
                  name="link"
                  fullWidth
                  label={"First Link"}
                  value={values.link}
                  onChange={handleChange}
                  error={touched.link && !!errors.link}
                  helperText={touched.link && errors.link}
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
                  name="secondLink"
                  fullWidth
                  label={"Second Link"}
                  value={values.secondLink}
                  onChange={handleChange}
                  error={touched.secondLink && !!errors.secondLink}
                  helperText={touched.secondLink && errors.secondLink}
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

export default AddSample;
