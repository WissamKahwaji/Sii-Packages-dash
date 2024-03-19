import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addClientInfo,
  deleteOurClientsInfo,
  editClientInfo,
  getOurClientsInfo,
} from ".";
import { ClientProps } from "../../components/items/dialogs/deleteClient/type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ClientsModel } from "./type";

const useGetClientsQuery = () =>
  useQuery({
    queryKey: ["clients"],
    queryFn: () => getOurClientsInfo(),
  });

const useDeleteClientMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-client"],
    mutationFn: ({ clientId }: ClientProps) => {
      return deleteOurClientsInfo(clientId);
    },
    onSuccess(data, variable) {
      toast.success(`delete ${variable.name} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError(data, variable) {
      toast.error(`failed to delete ${variable.name}`);
    },
  });
};

const useAddClientMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-client"],
    mutationFn: (payload: ClientsModel) => addClientInfo(payload),
    onSuccess(data, variable) {
      toast.success(`add ${variable.name} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      navigate("/our-clients", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to add ${variable.name}`);
    },
  });
};

const useEditClientMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-client"],
    mutationFn: (payload: ClientsModel) => editClientInfo(payload),
    onSuccess(data, variable) {
      toast.success(`edit ${variable.name} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      navigate("/our-clients", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to edit ${variable.name}`);
    },
  });
};

export {
  useGetClientsQuery,
  useDeleteClientMutation,
  useAddClientMutation,
  useEditClientMutation,
};
