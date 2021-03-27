// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs').promises;

import path from 'path';

export default async (_req, res) => {
    res.statusCode = 200;
    const postsDirectory = path.join(process.cwd(), 'data')
    const contents = await fs.readFile(`${postsDirectory}/schedule.json`, 'utf8');
    
    res.statusCode = 200
    res.json(contents);
}



