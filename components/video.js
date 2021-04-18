import { defaultConfig } from "next/dist/next-server/server/config-shared";
import 'lazysizes';
const Video = (props) => {

    return (
        <div className="embed-responsive embed-responsive-16by9">
        <iframe className="youtube embed-responsive-item lazyload" data-src={props.url}></iframe>
      </div>
    
        );
}

export default Video;