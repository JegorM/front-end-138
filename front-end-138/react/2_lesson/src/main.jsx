import { createRoot } from "react-dom/client"
import App from "./App"
const rootElement = document.getElementById("root")
const reactRoot = createRoot(rootElement)

reactRoot.render(<App />)
