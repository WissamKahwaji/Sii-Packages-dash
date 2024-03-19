import API_ROUTES from "../../constants/apiRoutes";
import { createFormData } from "../../utils";
import privetInstance from "../privetInstance";
import publicInstance from "../publicInstance";
import { ClientsModel } from "./type";

const getOurClientsInfo = async () => {
  const res = await publicInstance.get<ClientsModel[]>(API_ROUTES.CLIENTS.GET);
  return res.data;
};

const deleteOurClientsInfo = async (id: string) => {
  const res = await privetInstance.delete<ClientsModel>(
    API_ROUTES.CLIENTS.DELETE(id)
  );
  return res.data;
};

const addClientInfo = async (payload: ClientsModel) => {
  const data = createFormData(payload!);
  const res = await privetInstance.post<ClientsModel>(
    API_ROUTES.CLIENTS.ADD,
    data
  );
  return res.data;
};

const editClientInfo = async (payload: ClientsModel) => {
  const data = createFormData(payload!);
  const res = await privetInstance.put<ClientsModel>(
    API_ROUTES.CLIENTS.EDIT(payload._id),
    data
  );
  return res.data;
};

export {
  getOurClientsInfo,
  deleteOurClientsInfo,
  addClientInfo,
  editClientInfo,
};
