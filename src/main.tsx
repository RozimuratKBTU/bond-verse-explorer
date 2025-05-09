
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@/App.css";

// Serif гарнитурасын қосамыз (Wikipedia сияқты)
import "@fontsource/noto-serif/400.css";
import "@fontsource/noto-serif/700.css";

createRoot(document.getElementById("root")!).render(<App />);
