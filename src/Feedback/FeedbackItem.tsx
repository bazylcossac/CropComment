import { TFeedbackItem } from "../lib/types";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  console.log(feedbackItem);
  return (
    <li className="feedback">
      <button>
        <span>100</span>
      </button>

      <div>
        <p>N</p>
      </div>

      <div>
        <p>Neftlix</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quod vel
          iste id voluptatem cum ea provident voluptatum, culpa qui.
        </p>
      </div>

      <p>4d</p>
    </li>
  );
}
