import {
  start,
  registerApplication
} from 'single-spa';

Promise.all([
  System.import('pubsub-js'),
  System.import('snackbar')
]).then(() => {
  registerApplication({
    name: 'app-one',
    app: () => System.import('app-one'),
    activeWhen: location => location.pathname.startsWith('/')
  });
  start();
});