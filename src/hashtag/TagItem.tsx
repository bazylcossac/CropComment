type TagItemProps = {
  company: string;
  setCompanySelect: (companyName: string) => void;
};

function TagItem({ company, setCompanySelect }: TagItemProps) {
  return (
    <li key={company}>
      <button onClick={() => setCompanySelect(company)}>{company}</button>
    </li>
  );
}

export default TagItem;
