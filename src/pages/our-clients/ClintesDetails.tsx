import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Params } from "./type";
import {
  useAddClientMutation,
  useEditClientMutation,
} from "../../apis/ourClients/queries";
import { ClientsModel } from "../../apis/ourClients/type";
import { Form, Formik, FormikHelpers } from "formik";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import ImageDragDropField from "../../components/items/inputs/imageDragDropFeild";
import LoadingButton from "../../components/items/buttons/loadingButton";

const ClientDerails = () => {
  const { id } = useParams<Params>();
  const { state } = useLocation();
  const { client } = state ?? {};

  const { mutate: addClient } = useAddClientMutation();
  const { mutate: editClient } = useEditClientMutation();

  const initialValues: ClientsModel = {
    ...(id && { _id: id }),
    name: client?.name ?? "",
    logo: client?.logo ?? "",
  };

  const handleSubmit = (
    values: ClientsModel,
    { setSubmitting }: FormikHelpers<ClientsModel>
  ) => {
    id
      ? editClient(values, {
          onSettled() {
            setSubmitting(false);
          },
        })
      : addClient(values, {
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
        Client
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
                <ImageDragDropField
                  name="logoImg"
                  label="Logo Image"
                  oldImg={values.logo ?? ""}
                />
              </Grid>{" "}
              <Grid xs={12} md={5}>
                <TextField
                  name="name"
                  fullWidth
                  label={"name"}
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
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

export default ClientDerails;
