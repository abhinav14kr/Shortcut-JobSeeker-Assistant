import React from 'react';
import ExperiencedResume from '../../src/img/experienced_resume.jpeg';
import NewGradResume from '../../src/img/new_grad.jpeg';
import JakesResume from '../../src/img/jakes.jpeg'; 
import { Col, Row } from 'antd';
import { DownloadOutlined }from '@ant-design/icons';

const ResumeSection = () => {

  const onDownloadExperiencedResume = () => {
    fetch("Experienced-Resume-Template.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "Experienced-Resume-Template.docx";
        a.click();
      });
    });
  };

  const onDownloadNewGradResume = () => {
    fetch("New-Grad-Resume-Template.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "New-Grad-Resume-Template.docx";
        a.click();
      });
    });
  };

  const onDownloadJakesResume = () => {
    fetch("jakes-resume.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "jakes-resume.docx";
        a.click();
      });
    });
  };

  return (
    <div className="resume-section">
      {/* experienced resume */}
      <Row>
        <Col span={5} />
        <Col span={5}>
          <p className='big-font' style={{ textAlign: '-webkit-left' }}>Create a professional resume with our easy-to-use templates. Stand out from the crowd and increase your chances of landing your dream job.</p>
        </Col>
        <Col span={12}>
          <div className="image-container">
            <a href="ExperiencedResume" onClick={onDownloadExperiencedResume} style={{ position: 'relative' }}>
              <img style={{ width: '100%', opacity: '0.6' }} src={ExperiencedResume} className='centered-image-doc' alt="Document Preview" />
              <span style={{ zIndex: '2', position: 'absolute', top: '45%', right: '45%', fontSize: '50px' }}><DownloadOutlined /></span>
            </a>
          </div> 
        </Col>
      </Row>
      {/* new grad resume */}
      <Row style={{ marginTop: '4%' }}>
        <Col span={2} />
        <Col span={12}>
          <div className="image-container">
            <a href="NewGradResume" onClick={onDownloadNewGradResume} style={{ position: 'relative' }}>
              <img style={{ width: '100%', opacity: '0.6' }} src={NewGradResume} className='centered-image-doc' alt="Document Preview" />
              <span style={{ zIndex: '2', position: 'absolute', top: '45%', right: '45%', fontSize: '50px' }}><DownloadOutlined /></span>
            </a>
          </div> 
        </Col>
        <Col span={5}>
          <p className='big-font' style={{ textAlign: '-webkit-right' }}>Unlock a wealth of resources tailored specifically for master's students, ranging from expertly crafted resume templates to insightful interview guides.</p>
        </Col>
      </Row>
      <br />
      {/* jakes resume */}
      <Row style={{ marginTop: '4%' }}>
        <Col span={2} />
        <Col span={12}>
          <div className="image-container">
            <a href="JakesResume" onClick={onDownloadJakesResume} style={{ position: 'relative' }}>
              <img style={{ maxWidth: '200%', opacity: '0.6' }} src={JakesResume} className='centered-image-doc' alt="Document Preview" />
              <span style={{ zIndex: '2', position: 'absolute', top: '45%', left: '80%', fontSize: '50px' }}><DownloadOutlined /></span>
            </a>
          </div> 
        </Col>
      </Row>
    </div>
  );
}

export default ResumeSection;
