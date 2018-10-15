import React from 'react';
import Loadable from 'react-loadable';
import LinearLoader from './loader';

export const Reconcile = Loadable({
    loader: _ => import('../components/reconcile/reconcile.container'),
    loading: _ => (
        <div>
            <LinearLoader />
        </div>
    ),
});
