import React from 'react';
import Head from 'next/head';
import {Layout} from '../components/layout';
import {Coach} from '../components/coach';
class Coaches extends React.Component {
    

    render(){
        
        return (<>
           
        <Layout>
            <Head>
            <title>Coaches</title>
            </Head>
            <h1>Coaches</h1>
            <div>
                {
                    this.props.data.map((coach, index)=>{
                      return <Coach key={index} coach={coach}></Coach>;
                    })
                }    
            </div>
        </Layout>
        </>)
    }
}

export async function getStaticProps(context) {
    const data = await fetch('http://localhost:3000/api/coaches').then((res) => res.json());
    return {
        props: { data }, // will be passed to the page component as props
    }
}


export default Coaches;