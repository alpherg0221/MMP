import { createRoot } from 'react-dom/client';
import App from './App.tsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import '@fontsource/inter';

createRoot(document.getElementById('root')!).render(<App />)
