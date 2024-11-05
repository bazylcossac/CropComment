import AppName from "../AppName";
import FeedbackForm from "../Feedback/FeedbackForm";
import AppBackground from "../AppBackground";

function Header() {
  return (
    <header>
      <AppBackground />
      <AppName />
      <FeedbackForm />
    </header>
  );
}

export default Header;
