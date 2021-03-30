import React from 'react';


class Header extends React.Component {
    render(){
        return (
           <>
              <div className="top d-none d-sm-block d-md-block d-lg-block d-xl-block">
 <span>Call Us:</span> <a href="tel:+14055141770"> (405) 514-1770</a>
  <div className="float-right "><a className="btn btn-primary right-button" href="/getting-started">Contact Us</a></div>
</div>
<div className="top d-sm-none text-center">
 <i className="fa fa-phone fa-rotate-90" aria-hidden="true"></i><a href="tel:+14055141770">Call Us</a>
 <i className="fa fa-male fa-1x" aria-hidden="true"></i><a href="/getting-started">Drop In</a>
</div>
  <div className="header text-center"><a className="js-scroll-trigger" href="/#page-top">
    
      <img className="header-image" src="/images/cf2.png" /></a> 
  </div> 



           </>
        );
    }
}

export {Header};