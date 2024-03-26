import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Button variant={"loginButton"} size={"default"} asChild>
        <Link to={"login"}>Kirish</Link>
      </Button>
    </div>
  );
};

export default App;
