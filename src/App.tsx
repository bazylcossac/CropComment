import { useEffect } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import TagsList from "./hashtag/TagsList";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const getFeedback = useFeedbackItemsStore((state) => state.getFeedback);

  useEffect(() => {
    getFeedback();
  }, [getFeedback]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <TagsList />
    </div>
  );
}

export default App;
