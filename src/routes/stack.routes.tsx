import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home';
// import { CreatePost } from '../pages/CreatePost';
// import { EditPost } from '../pages/EditPost';
// import { RequestStatus } from '../pages/RequestStatus';
// import { MyPosts } from '../pages/MyPosts';

export type RootStackParamList = {
<<<<<<< Updated upstream
    CreatePost: undefined;
    Home: undefined;
    EditPost: undefined;
    RequestStatus: undefined;
    MyPosts: undefined;
=======
    // CreatePost: undefined;
    Home: undefined;
    // EditPost: undefined;
    // RequestStatus: undefined;
    // MyPosts: undefined;
>>>>>>> Stashed changes
};

const stackRoutes = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyle: {
                backgroundColor: "#fff"
            }
        }}
    >

        <stackRoutes.Screen
            name="Home"
            component={Home}
        />

        {/* <stackRoutes.Screen 
            name="CreatePost"
            component={CreatePost}
        />

        <stackRoutes.Screen 
            name="EditPost"
            component={EditPost}
        />

        <stackRoutes.Screen 
            name="RequestStatus"
            component={RequestStatus}
        />

        <stackRoutes.Screen 
            name="MyPosts"
            component={MyPosts}
        /> */}

    </stackRoutes.Navigator>
)

export default AppRoutes;