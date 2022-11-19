import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "./api";

const ARTICLES_KEY = "ARTICLES";

export const useArticles = () => {
  return useQuery({
    queryKey: [ARTICLES_KEY],
    queryFn: api.getArticles,
  });
};

export const useAddArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.postArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ARTICLES_KEY],
      });
    },
  });
};

export const useAddReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.postReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ARTICLES_KEY],
      });
    },
  });
};
