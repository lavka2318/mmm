import { baseApi } from "@/services/base-api";
import { BriefcaseType } from "./briefcase.type";

const briefcaseService = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      createBriefcase: builder.mutation<any, any>({
        invalidatesTags: ["Briefcase"],
        query: (body) => {
          return {
            body,
            method: "POST",
            url: "briefcase",
          };
        },
      }),
      createOrderClient: builder.mutation<any, any>({
        invalidatesTags: ["Briefcase", "Clients"],
        query: ({ body, id }) => {
          return {
            body,
            method: "POST",
            url: `briefcase/${id}`,
          };
        },
      }),
      getBriefcase: builder.query<any, any>({
        providesTags: ["Briefcase"],
        query: () => {
          return {
            url: "briefcase",
          };
        },
      }),
      getBriefcaseById: builder.query<BriefcaseType, any>({
        providesTags: ["Briefcase", "Clients"],
        query: ({ id }) => {
          return {
            url: `briefcase/${id}`,
          };
        },
      }),
      getBriefcaseByIdPurchase: builder.query<BriefcaseType, any>({
      providesTags: ["Briefcase"],
      query: ({ id }) => {
        return {
          url: `briefcase/purchase/${id}`,
        };
      },
    }),
      removeBriefcase: builder.mutation<any, any>({
        invalidatesTags: ["Briefcase"],
        query: ({ id }) => {
          return {
            method: "DELETE",
            url: `briefcase/${id}`,
          };
        },
      }),
      removeOrder: builder.mutation<any, any>({
        invalidatesTags: ["Briefcase"],
        query: ({ id, orderId }) => {
          return {
            method: "DELETE",
            url: `briefcase/${id}/orders/${orderId}`,
          };
        },
      }),
      updateOrderClient: builder.mutation<any, any>({
        invalidatesTags: ["Briefcase"],
        query: ({ id, orderId, body }) => {
          return {
            body,
            method: "PUT",
            url: `briefcase/${id}/orders/${orderId}`,
          };
        },
      }),
      changeBriefcase: builder.mutation<any, any>({
        invalidatesTags: ["Briefcase"],
        query: ({ id, body }) => {
          return {
            body,
            method: "PUT",
            url: `briefcase/${id}`,
          };
        },
      }),
      updateOrderDeliveryRoute: builder.mutation<any, any>({
        invalidatesTags: ["Briefcase"],
        query: ({ id, orderId, body }) => {
          return {
            body,
            method: "PUT",
            url: `briefcase/${id}/orders/${orderId}/deliveryRoute`,
          };
        },
      }),
    };
  },
});

export const {
  useCreateBriefcaseMutation,
  useCreateOrderClientMutation,
  useGetBriefcaseByIdQuery,
  useGetBriefcaseQuery,
  useRemoveBriefcaseMutation,
  useRemoveOrderMutation,
  useChangeBriefcaseMutation,
  useUpdateOrderClientMutation,
  useUpdateOrderDeliveryRouteMutation,
  useGetBriefcaseByIdPurchaseQuery
} = briefcaseService;
