import React from 'react';
import Loadable from 'react-loadable';

export const Management = Loadable({
    loader: _ => import('../components/management/ManagementGrid.container'),
    loading: _ => (
        <div>
            loading...
        </div>
    ),
});
