import React from 'react';
import { Col, Row } from 'antd';
import Interviewingio from '../img/interviewingio.svg'
import Leetcode from '../img/leetcode.svg'
import Adplist from '../img/adplist.svg'
import Pramp from '../img/pramp.svg'

const PrepSection = () => {
    return (
        <div className="tools-section">
            <Col>
                <Row span={24}>
                    <Col span={1} />
                    <Col span={9}>
                        <p className='big-font'>Master interview prep and shake off those nerves 
                            <br />
                        </p>
                        <p className='medium-font'>Utilize the right tools and methodologies to refine your storytelling skills. 
                            <br/>Practise until interviews become your stronghold.  
                            <br />
                        </p>
                        <br />
                        <Row span={24}>
                            <Col span={5}>
                                <a href="https://interviewing.io"  target="_blank" rel="noreferrer">
                                    <img src={Interviewingio} width={70} height={70} alt=''/>   
                                </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <a href="https://leetcode.com"  target="_blank" rel="noreferrer">
                                    <img src={Leetcode} width={70} height={70} alt=''/>   
                                </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <a href="https://adplist.org"  target="_blank" rel="noreferrer">
                                    <img src={Adplist} width={70} height={70} alt=''/>   
                                </a>
                            </Col>
                            <Col span={5}>
                                <a href="https://www.pramp.com"  target="_blank" rel="noreferrer">
                                    <img src={Pramp} width={70} height={70} alt=''/>   
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1} />
                    <Col span={12}>
                        <iframe width="550" height="500" src="https://www.youtube.com/embed/uD4izuDMUQA?si=-unfFi4JxZYazz1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                    <Col span={1} />
                </Row>
            </Col>
            
        </div>
    );
};

export default PrepSection;
