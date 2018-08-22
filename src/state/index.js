import applicationReducers from './application/application.reducers';

export const getRootReducers = () => ({
  application: applicationReducers
});