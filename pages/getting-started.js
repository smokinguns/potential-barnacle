import React from 'react';
import Head from 'next/head';
import {Layout} from '../components/layout';
import {ContactUs} from '../components/contact';

import Image from 'next/image'
const GettingStarted = ()=> {      
        return (<>
           
        <Layout>

            <Head>
            <title>Getting Started</title>
            </Head>
            <Image
                src="/images/1R7A9142.jpeg"
              alt="best coach ever"
              width={1920}
              height={1280}
            />
            <div className={"container"}>
            <ContactUs></ContactUs>
            </div>
        </Layout>
        </>)
}

export default GettingStarted;