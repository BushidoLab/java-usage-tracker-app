import React from 'react';
import Loadable from 'react-loadable';
import LinearLoader from './loader';

export const Audit = Loadable({
    loader: _ => import('../components/audit/audit.component'),
    loading: _ => (
        <div>
            <LinearLoader/>
        </div>
    ),
});
