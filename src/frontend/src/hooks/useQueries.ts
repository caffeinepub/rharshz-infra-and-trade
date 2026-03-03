import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Property, Service } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllProperties() {
  const { actor, isFetching } = useActor();
  return useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProperties();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSeedSampleData() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) return;
      await actor.seedSampleData();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
}

export function useAddFormSubmission() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      projectType,
      preferredDate,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      projectType: string;
      preferredDate: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.addFormSubmission(
        name,
        email,
        phone,
        projectType,
        preferredDate,
        message,
      );
    },
  });
}
