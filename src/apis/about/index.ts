import API_ROUTES from "../../constants/apiRoutes";
import { createFormData } from "../../utils";
import privetInstance from "../privetInstance";
import publicInstance from "../publicInstance";
import { AboutInfo } from "./type";

const getAboutInfo = async () => {
  const res = await publicInstance.get<AboutInfo>(API_ROUTES.ABOUT.GET);
  return res.data;
};

const editAboutInfo = async (payload: AboutInfo) => {
  const data = createFormData(payload!);
  const res = await privetInstance.put<AboutInfo>(API_ROUTES.ABOUT.EDIT, data);
  return res.data;
};

export { getAboutInfo, editAboutInfo };
