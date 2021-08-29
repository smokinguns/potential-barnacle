import React from 'react';
import Head from 'next/head';
import {Layout} from '../components/layout';
import Gallery from 'react-photo-gallery';


const photos = [
  {
    src: 'https://via.placeholder.com/468x60',
    width: 4,
    height: 3
  },
  {
    src: 'https://via.placeholder.com/468x60',
    width: 1,
    height: 1
  }
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