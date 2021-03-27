import React from 'react';
import Head from 'next/head';
import { Navbar } from './navbar';
import { Footer } from './footer';
import {Header} from '../components/header';
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
                <div id="copyright-bar" className={'copyright navbar-dark bg-dark'}>
© 2020 SG Web Designs
</div>
                <Footer></Footer>
            </>)
    }
}
export { Layout };