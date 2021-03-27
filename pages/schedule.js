import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/layout';
import { Day } from '../components/schedule/day';
class Schedule extends React.Component {

    render() {
        return <>
            <Layout>
                <Head>
                    <title>Schedule</title>
                </Head>
                <div>
                    {
                        this.props.data.schedule.map((day) => {
                            return <Day key={day.day} day={day}></Day>
                        })
                    }
                </div>
            </Layout>
        </>
    }
}

export async function getStaticProps(context) {
    const data = await fetch('http://localhost:3000/api/schedule').then((res) => res.json());

    return {
        props: { data }, // will be passed to the page component as props
    }
}


export default Schedule;