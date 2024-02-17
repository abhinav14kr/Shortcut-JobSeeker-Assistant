import React from 'react';
import { Row } from 'antd';

const Section = ({ id, title, children }) => {
  return (
    <Row id={id} className="section-row">
      {/* <h6>{title}</h6> */}
      {children}
      <hr></hr>
    </Row>
    
  );
}

export default Section;
