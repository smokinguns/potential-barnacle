import React from 'react';
import Head from 'next/head';
import {Layout} from '../components/layout';
import Gallery from 'react-photo-gallery';


const photos = [
  {
    src: '/images/1.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/2.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/images/3.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/11.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/images/20.jpg',
    width: 2,
    height: 2
  },
  {
    src: '/images/14.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/15.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/images/16.jpg',
    width: 2,
    height: 2
  },
  {
    src: '/images/17.jpg',
    width: 1,
    height: 1
  },
  {
    src: '/images/9.jpg',
    width: 4,
    height: 3
  },
];


class Photos extends React.Component {
    

    render(){
        
        return (<>
           
        <Layout>
            <Head>
            <title>Photos</title>
            
            </Head>
    

   


    <article className="content-item page">
        <header>
            
    <h1>Photos</h1>
    
        </header>
        <Gallery photos={photos} />
    </article>
    
    
        </Layout>
        </>)
    }
}

export default Photos;