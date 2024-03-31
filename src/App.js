import { UserLoader } from "./components/containers/user-loader";
import { ResourceLoader } from "./components/containers/resource-loader";
import { BookInfo } from "./components/container-children/book-info";
import { UserInfo } from "./components/container-children/user-info";

export default function App() {
  return (
    <>
      {/* <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader> */}
      <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl={"/books/2"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
}
