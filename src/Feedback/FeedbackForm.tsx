import { useState } from "react";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import { MAX_CHARACTERS } from "../lib/constants";

function FeedbackForm() {
  const [text, setText] = useState("");
  const charLeft = MAX_CHARACTERS - text.length;
  const addPost = useFeedbackItemsStore((state) => state.addPost);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(text);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        className="feedback-textarea"
        spellCheck={false}
        id="feedback-textarea"
        placeholder="dd"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={MAX_CHARACTERS}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the company
      </label>

      <div>
        <p className="u-italic">{charLeft}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
