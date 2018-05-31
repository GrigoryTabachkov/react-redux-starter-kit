// Global definitions (you shouldn't import it, it is global scope)
/* tslint:disable */
interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(): any;
  __data: any; // initial redux state, maybe undefined
}

declare var __DISABLE_SSR__: boolean;
declare var __SERVER__: boolean;
declare var __CLIENT__: boolean;
declare var __LANG__: 'en' | 'he';
declare var __HOST__: string;

interface SinonStub {
  callsFake: Function;
}

interface WebpackModule {
  hot: boolean;
  accept: Function;
}

declare module 'redux-async-connect';
declare module 'react-geosuggest';
declare module 'normalizr';
declare module '*.scss';
declare module '*.png';
declare module 'decko';
declare module 'react-hot-loader';
declare module 'react-async-bootstrapper';
declare module 'enzyme-adapter-react-16';
declare module 'postcss-reporter';
declare module 'postcss-easy-import';
declare module 'postcss-scss';
declare module 'stylelint';
declare module 'doiuse';

declare module 'webpack-isomorphic-dev-middleware';
