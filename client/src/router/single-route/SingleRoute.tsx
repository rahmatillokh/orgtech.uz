import { useLocation } from "react-router-dom";

function SingleRoute() {
	const location = useLocation();
	const item = location.state.item;

	console.log(item);
	return <div className="container"></div>;
}
export default SingleRoute;
