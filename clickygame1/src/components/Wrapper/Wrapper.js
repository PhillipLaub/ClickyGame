import React from 'react';
import './Wrapper.css';

//Inside wrapper component in app.js are Header and Card components, which will be displayed as the props.children inside the wrapper
const Wrapper = props => (
<div className="wrapper">{props.children}</div>
)

export default Wrapper;