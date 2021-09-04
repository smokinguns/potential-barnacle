import Head from 'next/head'
import Carousel from 'react-bootstrap/Carousel';
import { Layout } from '../components/layout';
import { promises as fs } from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'
import {Schedule} from '../components/schedule/schedule';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const DynamicVideo = dynamic(() => import('../components/video'),
{ ssr: false })



import {Video} from '../components/video';


const Home =  (props) => {

  return (
    
    <>
      <Head>
        <title>CrossFit 66</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
        <meta property="og:title" content="CrossFit 66" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/images/gym.jpg" />
      </Head>
      <Layout>
        <main>
          <section>
            <h1>CrossFit 66</h1>
            <picture>
            
            <source srcSet={`/images/large/${props.data.hero.path.replace("jpg","webp")}`}  media="(min-width: 1200px)" type="image/webp" />
             <source srcSet={`/images/medium/${props.data.hero.path.replace("jpg","webp")}`}  media="(min-width: 800px)" type="image/webp"/>
                <source srcSet={`/images/small/${props.data.hero.path.replace("jpg","webp")}`}  media="(min-width: 300px)" type="image/webp" />


             <source srcSet={`/images/large/${props.data.hero.path}`}  media="(min-width: 1200px)" type="image/jpeg" />
             <source srcSet={`/images/medium/${props.data.hero.path}`}  media="(min-width: 800px)" type="image/jpeg"/>
                <source srcSet={`/images/small/${props.data.hero.path}`}  media="(min-width: 300px)" type="image/jpeg" />
              <img src={`/images/large/${props.data.hero.path}`} alt={props.data.hero.alt} />
              
              
            </picture>
            <p>Located on Historic Route 66, you will find more than just a gym, you will find a family friendly atmosphere and an opportunity to reach fitness levels you never thought were possible. Our certified coaches will monitor you during the workout to ensure your safety and look for opportunities to help you improve. New to working out, do not worry, we have you covered. Our workouts can be scaled to meet your fitness level, while still providing you room for growth. Still not sure? Come in today and see for yourself. We know you will not be disappointed.</p>
          </section>
          
          {
            
            
               // on browser
          
             props.data.videos.map((video,idx) => {
                    
                    return (
                      <section key={idx.toString()}>
                      <h3>{video.heading}</h3>
                      <DynamicVideo url={video.url}></DynamicVideo>     
                      <p>{video.paragraph}</p>
                    </section>


                    );

                  })
          }
          <section>
            <Carousel>
              
              {
                  props.data.carousel.map((img, ndx) => {
                    return (
                <Carousel.Item key={ndx.toString()}>
                <picture className="d-block w-100">
            
                <source srcSet={`/images/large/${img.path.replace("jpg","webp")}`}  media="(min-width: 1200px)" type="image/webp" />
             <source srcSet={`/images/medium/${img.path.replace("jpg","webp")}`}  media="(min-width: 800px)" type="image/webp"/>
                <source srcSet={`/images/small/${img.path.replace("jpg","webp")}`}  media="(min-width: 300px)" type="image/webp" />


            <source srcSet={`/images/large/${img.path}`}  media="(min-width: 1200px)"  type="imgage/jpeg"/>
            <source srcSet={`/images/medium/${img.path}`}  media="(min-width: 800px)" type="imgage/jpeg" />
               <source srcSet={`/images/small/${img.path}`}  media="(min-width: 300px)" type="imgage/jpeg" />
             <img src={`/images/large/${img.path}`} />
             
             
           </picture>

                  
                
              </Carousel.Item>                    
                    
                    );
                  })
                }
                 
            </Carousel>
          </section>
<section>
  <h3>Coaches</h3>
  <CardGroup>
    {
  props.data.coaches.map((coach,idx) => {
                    
                    return (
                 

<Card key={idx.toString()}>
    <Card.Img variant="top" src={`/images/${coach.photo}`} />
    <Card.Body>
      <Card.Title>{coach.name}</Card.Title>
      <a  href={`/coaches?coach=${coach.id}`}>BIO</a>
      {
        coach.certs.map((cert) =>{
          return ( <div key={idx.toString()}>{cert}</div> );
        })
      }
      
    </Card.Body>
  </Card>


                     


                    );

                  })
          } 
</CardGroup>
</section>
          <section>
            <h3>Schedule</h3>
            <Schedule id="schedule" schedule={props.data.schedule}>

            </Schedule>
          
          </section>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {

  const dataDirectory = path.join(process.cwd(), 'data')
  const rawData = await  fs.readFile(`${dataDirectory}/home.json`,'utf8');
  const data = JSON.parse(rawData);
  return {
      props: { data }, // will be passed to the page component as props
  }
}

export default Home;
