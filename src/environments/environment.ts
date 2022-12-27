// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  HOST: 'http://localhost:8080',
  url_app: 'https://platzi-store.herokuapp.com/products',
  firebaseConfig : {
    apiKey: "AIzaSyCquuNuz5nAdnnIZ3fNVMiSMXofzSV45eE",
    authDomain: "platzi-test-65a74.firebaseapp.com",
    projectId: "platzi-test-65a74",
    storageBucket: "platzi-test-65a74.appspot.com",
    messagingSenderId: "806158189125",
    appId: "1:806158189125:web:18a5cd9d498c3ffb85d92c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
