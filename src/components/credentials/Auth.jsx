import React from 'react';
import { AuthContainer } from '../../pages';
import { hasTokens } from '../../services';

export const Auth = ({ children }) => (hasTokens() ? children : <AuthContainer />);