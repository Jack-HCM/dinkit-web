export type FeatureRequestState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialFeatureRequestState: FeatureRequestState = {
  status: "idle",
  message: "",
};
