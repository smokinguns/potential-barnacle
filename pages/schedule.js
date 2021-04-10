import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/layout';
import { Day } from '../components/schedule/day';
import { promises as fs } from 'fs'
import path from 'path'

class Schedule extends React.Component {

    render() {
        return <>
            <Layout>
                <Head>
                    <title>Schedule</title>
                </Head>
                <h1>Schedule</h1>
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
    const dataDirectory = path.join(process.cwd(), 'data')
    const rawData = await fs.readFile(`${dataDirectory}/schedule.json`, 'utf8');
    const data = JSON.parse(rawData);
    return {
        props: { data }, // will be passed to the page component as props
    }
}


export default Schedule;