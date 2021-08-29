import ReactMapGL, {Marker} from 'react-map-gl';
import { Component } from 'react';

class Map extends Component {
    state = {
      viewport: {
        width: '100vw',
        height: 150,
        latitude: 35.5070502,
        longitude: -97.7355455,
        zoom: 16
      }
    };
  
    render() {
      
      return (
          <div id="map">
        <ReactMapGL 
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}

          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1Ijoic21va2luZ3VucyIsImEiOiJja2YxeGs4NnMwdnZ6MnJsM2dwZnA3NmFvIn0.suyc8pqbVM_JcWM8Ebu7Wg"
          
        >
       <Marker className="map_marker"
        key={"marker"}
        longitude = {-97.7355455}
        
        latitude = {35.5070502}
        >
          <div><a href="maps://?q=-97.7355455,35.5070502"> CrossFit 66</a></div>
       </Marker>

        </ReactMapGL>
        </div>
      );
    }
  }

/*
 <script>
            mapboxgl.accessToken = 'pk.eyJ1Ijoic21va2luZ3VucyIsImEiOiJja2YxeGs4NnMwdnZ6MnJsM2dwZnA3NmFvIn0.suyc8pqbVM_JcWM8Ebu7Wg';
var map = new mapboxgl.Map({
                container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-97.7355455,35.5070502], // starting position [lng, lat]
zoom: 16 // starting zoom

});

var popup = new mapboxgl.Popup({offset: 25 }).setHTML('<h1>CrossFit 66</h1> <div>740 E Main St</div><div>Yukon, OK 7309

9</div><a href="maps://?saddr=Current+Location&daddr=35.5070502,-97.7355455">Get Directions</a>');

var marker = new mapboxgl.Marker()
.setLngLat([-97.7355455, 35.5070502])
.setPopup(popup)
.addTo(map);
</script>
*/
export default Map;