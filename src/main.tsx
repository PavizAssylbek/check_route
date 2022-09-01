// styles
import 'antd/dist/antd.css';

import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';

import { BrowserRouter } from 'react-router-dom';

import ruRU from 'antd/es/locale/ru_RU';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <ConfigProvider locale={ruRU}>
      <BrowserRouter basename="/trp-ui/">
        <App />
      </BrowserRouter>
  </ConfigProvider>
);
