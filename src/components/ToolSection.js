import React from 'react';
import { Col, Row } from 'antd';

import Simplify from '../img/simplify.svg'
import Careerflow from '../img/careerflow.svg'
import Wonsulting from '../img/wonsulting.svg'
import Jobscan from '../img/jobscan.svg'

import Linkedin from '../img/linkedin.svg'
import Hunter from '../img/hunter.svg'
import Sixsense from '../img/sixsense.svg'
import RocketReach from '../img/rocket-reach.svg'

import Github from '../img/github.svg'
import Webflow from '../img/webflow.svg'
import Upwork from '../img/upwork.svg'

const ToolsSection = () => {
    return (
        <div className="tools-section">
            <div className="video-container">
                <iframe width="750" height="400" src="https://www.youtube.com/embed/uD4izuDMUQA?si=-unfFi4JxZYazz1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Col>
                <Row span={24} gutter={[16, 40]}>
                    <Col span={4} />
                    <Col span={16}>
                        <p className='big-font'>Streamline your job application process
                            <br />
                        and reclaim valuable time.</p>
                        <p className='medium-font'>Discover a treasure trove of tools designed to accelerate
                            <br/>your job search, minimize time spent on applications, and
                            <br />optimize your chances of securing interviews
                        </p>
                    </Col>
                    <Col span={4} />
                </Row>
                <br /><br /><br />
                <Row span={24} style={{ marginBottom: '100px' }}>
                    <Col span={10}>
                        <h3>Unlock a wealth of resources tailored specifically for master's students.</h3>
                    </Col>
                    <Col span={1} />
                    <Col span={13} style={{ paddingTop: '12px' }}>
                        <Row span={24}>
                            <Col span={5}>
                                <a href="https://simplify.jobs"  target="_blank" rel="noreferrer">
                                    <img src={Simplify} width={70} height={70} alt=''  />                
                                </a>                
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <a href="https://www.careerflow.ai"  target="_blank" rel="noreferrer">
                                    <img src={Careerflow} width={70} height={70} alt='' />
                                </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <a href="https://app.wonsulting.ai"  target="_blank" rel="noreferrer">
                                    <img src={Wonsulting} width={70} height={70}  alt=''/>
                                </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <a href="https://app.jobscan.co/"  target="_blank" rel="noreferrer">
                                    <img src={Jobscan} width={70} height={70} alt=''/>
                                </a>   
                            </Col>                           
                        </Row>
                    </Col>
                </Row>

                <Row span={24} style={{ marginBottom: '100px' }}>
                <Col span={13} style={{ paddingTop: '12px' }}>
                        <Row span={24}>
                            <Col span={5}>
                            <a href="https://www.linkedin.com/"  target="_blank" rel="noreferrer">
                                <img src={Linkedin} width={70} height={70} alt=''/>
                            </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                            <a href="https://hunter.io/"  target="_blank" rel="noreferrer">
                                <img src={Hunter} width={70} height={70} alt=''/>   
                            </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                            <a href="https://6sense.com/"  target="_blank" rel="noreferrer">
                                <img src={Sixsense} width={70} height={70} alt=''/>  
                            </a> 
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                            <a href="https://rocketreach.co/"  target="_blank" rel="noreferrer">
                                <img src={RocketReach} width={70} height={70} alt='' />  
                            </a> 
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1} />
                    <Col span={10}>
                        <h3>Unlock a wealth of resources tailored specifically for master's students.</h3>
                    </Col>
                </Row>

                <Row span={24} style={{ marginBottom: '100px' }}>
                    <Col span={10}>
                        <h3>Unlock a wealth of resources tailored specifically for master's students.</h3>
                    </Col>
                    <Col span={1} />
                    <Col span={13} style={{ paddingTop: '12px' }}>
                        <Row span={24}>
                            <Col span={5}>
                            <a href="github.com"  target="_blank" rel="noreferrer">
                                <img src={Github} width={70} height={70} alt='' />   
                            </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                            <a href="https://webflow.com/" target="_blank" rel="noreferrer">
                                <img src={Webflow} width={70} height={70} alt=''/>
                            </a>   
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                            <a href = "https://adplist.org/" target = "_blank" rel="noreferrer">
                                <img src={Upwork} width={70} height={70} alt=''/>   
                            </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            
        </div>
    );
};

export default ToolsSection;
