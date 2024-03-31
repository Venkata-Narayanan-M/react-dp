import { SplitScreen } from "./components/split-screen";

const LeftSideComponent = ({ title }) => {
  return (
    <h2 style={{ backgroundColor: 'crimson' }}>{title}</h2>
  )
}

const RightSideComponent = ({ title }) => {
  return (
    <h2 style={{ backgroundColor: 'yellow' }}>{title}</h2>
  )
}

export default function App() {
  return (<><SplitScreen leftWidth={1} rightWidth={3}>
    <LeftSideComponent title={'LEFT'} />
    <RightSideComponent title={'RIGHT'} />
  </SplitScreen></>)
}