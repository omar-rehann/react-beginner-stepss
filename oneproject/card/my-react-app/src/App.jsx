import Card from "./card";
import { data } from "./data";

function App() {
  const showdata = data.map((e, index) => {
    return <Card key={index} src={e.img} name={e.name} text={e.text} />;
  });

  return (
    <>
      {showdata}
    </>
  );
}

export default App;
