import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import RoomContext from '_context/room/room.context';

interface Props extends RouteProps {
    component: any;
}
const RoomRoute: React.FC<Props> = (props) => {
    const { roomLoaded } = React.useContext(RoomContext);

    const { component: Component, ...rest } = props;

    return (
        <Route
            {...rest}
            render={(props) =>
                !roomLoaded ? (
                    <Redirect
                        to={{
                            pathname: '/room',
                            state: { from: props.location },
                        }}
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default RoomRoute;
