import React from 'react';
import Loadable from 'react-loadable';
import LinearLoader from './loader';

export const Management = Loadable({
    loader: _ => import('../components/management/ManagementGrid.container'),
    loading: _ => (
        <div>
            <LinearLoader />
        </div>
    ),
});
