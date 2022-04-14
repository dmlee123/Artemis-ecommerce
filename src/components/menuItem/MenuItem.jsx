import React from 'react'
import "./menuItem.scss"
import { useLocation,useNavigate,useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
//withRouter wrapper above - since it depreciated, got to make a new one with hooks



function MenuItem(prop) {
    

  return (
      <div style = {{ backgroundImage: `url(${prop.data.imageUrl})` }} className={`${prop.data.size} menu-item`} >
          <div className='content' onClick = {() => {prop.router.navigate(`/${prop.data.linkUrl}`)} }>
              <h1 className='title'>{prop.data.title.toUpperCase()}</h1>
              <span className={`${prop.data.food} subtitle`}>Shop Now</span>
          </div>
      </div>
  )
}

export default withRouter(MenuItem);
