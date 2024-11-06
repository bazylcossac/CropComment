import { useState } from "react";
import { TFeedbackItem } from "../lib/types";
import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};
export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);
  const handleUpVote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.disabled = true;
    setUpvoteCount((prev) => ++prev);
    e.stopPropagation();
  };

  return (
    <li className="feedback" key={feedbackItem.id}>
      <button onClick={handleUpVote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}
