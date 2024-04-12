import { Navbar } from "@/components/";
import { Route, Routes } from "react-router-dom";
import { Home } from "./router/";
import { SingleRoute } from "./router";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<SingleRoute />} />
			</Routes>
		</div>
	);
};

export default App;
