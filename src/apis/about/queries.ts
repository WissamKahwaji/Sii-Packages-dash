import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editAboutInfo, getAboutInfo } from ".";
import { useNavigate } from "react-router-dom";
import { AboutInfo } from "./type";
import { toast } from "react-toastify";

const useGetAboutQuery = () =>
  useQuery({
    queryKey: ["about"],
    queryFn: () => getAboutInfo(),
  });

const useEditAboutMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-about"],
    mutationFn: (payload: AboutInfo) => editAboutInfo(payload),
    onSuccess(data, variable) {
      toast.success(`edit about info successfully.`);
      queryClient.invalidateQueries({ queryKey: ["about"] });
      navigate("/about-us", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to edit about info`);
    },
  });
};

export { useGetAboutQuery, useEditAboutMutation };
