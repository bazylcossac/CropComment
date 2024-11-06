import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import TagItem from "./TagItem";
function TagsList() {
  const getCompanyTags = useFeedbackItemsStore((state) => state.getCompanyTags);
  const setCompanySelect = useFeedbackItemsStore(
    (state) => state.setCompanySelect
  );
  const feedbackItems = useFeedbackItemsStore((state) => state.feedbackItems);
  const companyList = getCompanyTags();

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <TagItem
          company={company}
          key={company}
          setCompanySelect={setCompanySelect}
        />
      ))}
    </ul>
  );
}

export default TagsList;
