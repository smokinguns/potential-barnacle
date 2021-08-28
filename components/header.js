import React from 'react';



class Header extends React.Component {
    render(){
        return (
           <>

  <div className="header text-center"><a className="js-scroll-trigger" href="/#page-top">
    <picture>
        <source srcSet="/images/cf2.webp" type="image/webp" />
      <img className="header-image" src="/images/cf2.png" /> </picture> </a> 
  </div> 



           </>
        );
    }
}

export {Header};