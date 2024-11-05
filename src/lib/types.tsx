export type feedbackStore = {
  feedbackItems: string[];
  isLoading: false;
  errorMessage: "";
  getFeedback: () => Promise<void>;
};

export type TFeedbackItem = {
  badgeLetter: string;
  company: string;
  daysAgo: number;
  id: number;
  text: string;
  upvoteCount: number;
};