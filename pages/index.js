import Head from 'next/head'
import Carousel from 'react-bootstrap/Carousel';
import { Layout } from '../components/layout';
import { promises as fs } from 'fs'
import path from 'path'

const Home =  (props) => {
  console.log()
  return (
    
    <>
      <Head>
        <title>Crossfit 66</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <section>
            <h1>Crossfit 66</h1>
            <img
              
              src={`/images/${props.data.hero.path}`}
              alt={props.data.hero.alt}
              width={props.data.hero.width}
              height={props.data.hero.height}
            
            />
            <p>Located on Historic Route 66, you will find more than just a gym, you will find a family friendly atmosphere and an opportunity to reach fitness levels you never thought were possible. Our certified coaches will monitor you during the workout to ensure your safety and look for opportunities to help you improve. New to working out, do not worry, we have you covered. Our workouts can be scaled to meet your fitness level, while still providing you room for growth. Still not sure? Come in today and see for yourself. We know you will not be disappointed.</p>
          </section>
          <section>
            <h3>New to Crossfit</h3>
            <div className="embed-responsive">
              <iframe className="youtube" src="https://www.youtube.com/embed/mlVrkiCoKkg"></iframe>
            </div>
            <p>CrossFit is the perfect application for any committed individual regardless of experience or age. CrossFit leaves behind the traditional notion of long, slow moderate sessions of exercise and replaces it with powerful, short burst, high intensity workouts that will leave people of any fitness level feeling accomplished. The workouts are broad, general and inclusive by design.</p>
          </section>
          <section>
            <Carousel>
              
              {
                  props.data.carousel.map((img, ndx) => {
                    return (
                <Carousel.Item key={ndx.toString()}>
                
                  <img
                   
                  className="d-block w-100"
                  src={`/images/${img.path}`}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                />
                
              </Carousel.Item>                    
                    
                    );
                  })
                }
                 
            </Carousel>
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

