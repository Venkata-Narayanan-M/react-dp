export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Pages: {pages}</p>
    </>
  );
};
