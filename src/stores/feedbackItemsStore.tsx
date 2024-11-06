import { create } from "zustand";
import { TFeedbackItem } from "../lib/types";
import { nanoid } from "nanoid";

type feedbackStore = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  getFeedback: () => Promise<void>;
  getCompanyTags: () => string[];
  addPost: (text: string) => Promise<void>;
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
      set(() => ({ feedbackItems: data.feedbacks.reverse() }));
      set(() => ({ isLoading: false }));
    } catch (error) {
      set(() => ({ errorMessage: "Error, try again later" }));
    }
  },
  getCompanyTags: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  addPost: async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newPost: TFeedbackItem = {
      text: text,
      company: companyName,
      upvoteCount: 0,
      id: new Date().getTime(),
      daysAgo: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    set((state) => ({ feedbackItems: [...state.feedbackItems, newPost] }));
    try {
      await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
    } catch (error) {
      set(() => ({ errorMessage: "Something went wrong" }));
    }
  },
}));
