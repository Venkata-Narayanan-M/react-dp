import { Modal } from "./components/modals/Modal";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { books } from "./data/books";

export default function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}
