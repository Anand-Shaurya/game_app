import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>Hello world. This is a children prop.</Alert>
      <Button color="success" onClickFunction={() => console.log("Clicked")}>
        Danger
      </Button>
    </div>
  );
}

export default App;
