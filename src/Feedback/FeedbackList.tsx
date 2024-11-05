import { useState, useEffect } from "react";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import FeedbackItem from "./FeedbackItem";
import Spinner from "../Components/Spinner";


function FeedbackList() {
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
