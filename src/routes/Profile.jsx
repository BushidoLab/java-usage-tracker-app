import React from 'react';
import Loadable from 'react-loadable';
import LinearLoader from './loader';

export const Profile = Loadable({
    loader: _ => import('../components/profile/profile.container'),
    loading: _ => (
        <div>
            <LinearLoader />
        </div>
    ),
});
