import React from 'react';
import Head from 'next/head';
import { Navbar } from './navbar';
import { Footer } from './footer';
import {Header} from '../components/header';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                </Head>
                <Header></Header>
                <Navbar></Navbar>
                <div className={'container'}>
                    {this.props.children}
                </div>

                <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
                <div id="copyright-bar" className={'copyright navbar-dark bg-dark'}>
© 2020 SG Web Designs
</div>
                <Footer></Footer>
                <div id="contact-footer">
                   <span>Call me</span>

                </div>
            </>)
    }
}
export { Layout };