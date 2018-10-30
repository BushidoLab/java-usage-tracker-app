import React from 'react';
import Loadable from 'react-loadable';
import LinearLoader from './loader';

export const Inspect = Loadable({
    loader: _ => import('../components/inspect/Inspect.container'),
    loading: _ => (
        <div>
            <LinearLoader/>
        </div>
    ),
});
