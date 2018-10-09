import React from 'react';
import Loadable from 'react-loadable';

export const Inspect = Loadable({
    loader: _ => import('../components/inspect/Inspect.container'),
    loading: _ => (
        <div>
            loading...
        </div>
    ),
});
