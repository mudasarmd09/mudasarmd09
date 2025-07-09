import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ✅ Yeh line add karo
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>         {/* ✅ Yeh wrap karo */}
    <App />
  </BrowserRouter>
);
