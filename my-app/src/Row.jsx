import React from 'react';
import "./Row.css";
import { ThemeContext } from "./ThemeContext";

export default class Row extends React.Component {
  static contextType = ThemeContext;

  render() {
  	const { label, children } = this.props;
    const { fontColor, backgroundColor } = this.context;

  	return (
	    <div 
	      className="Row" 
	      style={{
	    	'backgroundColor': backgroundColor,
	    	'color': fontColor
	      }}
	    >
	      <p>{label}</p>
	      {children}
	    </div>
	  );

  }
}
