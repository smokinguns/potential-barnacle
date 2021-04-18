import React from 'react';
import Head from 'next/head';
import {Layout} from '../components/layout';
import {ContactUs} from '../components/contact';

const GettingStarted = ()=> {      
        return (<>
           
        <Layout>

            <Head>
            <title>Getting Started</title>
            </Head>
            <h1>Getting Started</h1>

            <picture>
            
            <source srcSet="/images/large/1R7A9142.webp"  media="(min-width: 1200px)" type="image/webp" />
             <source srcSet="/images/medium/1R7A9142.webp"  media="(min-width: 800px)" type="image/webp"/>
                <source srcSet="/images/small/1R7A9142.webp" media="(min-width: 400px)" type="image/webp" />


             <source srcSet="/images/large/1R7A9142.jpeg"  media="(min-width: 1200px)" type="image/jpg" />
             <source srcSet="/images/medium/1R7A9142.jpeg" media="(min-width: 800px)" type="image/jpg"/>
                <source srcSet="/images/small/1R7A9142.jpeg"  media="(min-width: 400px)" type="image/jpg" />
              <img src="/images/large/1R7A9142.jpeg" />
              
              
            </picture>

            
            <div className={"container"}>
            <ContactUs></ContactUs>
            </div>
        </Layout>
        </>)
}

export default GettingStarted;