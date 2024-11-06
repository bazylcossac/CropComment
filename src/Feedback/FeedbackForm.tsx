import { useState } from "react";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import { MAX_CHARACTERS } from "../lib/constants";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);
  const charLeft = MAX_CHARACTERS - text.length;
  const addPost = useFeedbackItemsStore((state) => state.addPost);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.length > MAX_CHARACTERS) {
      return;
    }
    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }
    addPost(text);
    setText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
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
