const fs = require('fs').promises;
import path from 'path';



export default async (req, res) => {
    const postsDirectory = path.join(process.cwd(), 'data')
   const contents = await  fs.readFile(`${postsDirectory}/home.json`,'utf8');
   
   res.statusCode = 200
   res.json(contents);
}