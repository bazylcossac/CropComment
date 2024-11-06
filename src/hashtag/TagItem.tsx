type TagItemProps = {
  company: string;
};

function TagItem({ company }: TagItemProps) {
  return (
    <li key={company}>
      <button>{company}</button>
    </li>
  );
}

export default TagItem;
