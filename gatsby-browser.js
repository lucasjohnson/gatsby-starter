import React from 'react';
import { Provider } from './src/context/Context';
import 'normalize.css';
import './css/global.css';

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
