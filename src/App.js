import { UserLoader } from "./components/containers/user-loader";
import { ResourceLoader } from "./components/containers/resource-loader";
import { BookInfo } from "./components/container-children/book-info";
import { UserInfo } from "./components/container-children/user-info";
import { DataSource } from "./components/containers/data-source";
import { DataSourceRender } from "./components/containers/data-source-render";
import axios from "axios";

async function getData() {
  const response = await axios.get(`http://localhost:9090/users/2`);
  return response.data;
}

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ data }) => <h1>{data}</h1>;

export default function App() {
  return (
    <>
      <DataSourceRender
        getData={() => getData()}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceRender>

      <DataSource
        getData={() => getDataFromLocalStorage("name")}
        resourceName={"data"}
      >
        <Message />
      </DataSource>
      {/* <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"1"}>
        <UserInfo />
      </UserLoader> */}
      {/* <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl={"/books/2"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader> */}
    </>
  );
}
