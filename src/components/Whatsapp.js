import React from 'react';
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

const App = () => <ReactWhatsapp number='1-437-984-5570' message='Hello' />;

render(<App />, document.getElementById('root'));
