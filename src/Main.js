import { Link, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import App from "./App";
import Services from "./pages/Services";

export default function Main() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/services" element={<Services />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}
