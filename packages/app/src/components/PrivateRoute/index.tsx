import React, { useContext, ReactNode } from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { AppContext } from '../AppProvider/AppContext';

const PrivateRoute = ({ component, ...rest}: RouteProps) => {
  const { currentUser } = useContext(AppContext);
  if(!component) {
    throw Error("component is undefined");
  }
  const Component = component;
  const render = (props: RouteComponentProps<any>): ReactNode => {
    if(currentUser) {
      return <Component {...props} />
    }
    return <Redirect to={{ pathname: '/ '}} />
  }
  return <Route {...rest} render={render} />
}

export default PrivateRoute;