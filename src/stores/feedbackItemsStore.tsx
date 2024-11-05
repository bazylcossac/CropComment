import { create } from "zustand";
// import { feedbackStore } from "../lib/types";
import { TFeedbackItem } from "../lib/types";

type feedbackStore = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  getFeedback: () => Promise<void>;
};

export const useFeedbackItemsStore = create<feedbackStore>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",

  getFeedback: async () => {
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      const data = await response.json();
      set(() => ({ feedbackItems: data.feedbacks }));
      set(() => ({ isLoading: false }));
    } catch (error) {
      set(() => ({ errorMessage: "Error, try again later" }));
    }
  },
}));
