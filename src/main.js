import 'bootstrap';

export function configure(aurelia) {
 // These variables are only here to be able to distinguish between the two
 // installation options presented above.
 // Of course you can use the correct name directly in the import below.

 let materialize = 'materialize-css'; // ONLY when using the "npm" option above

 return System.import(materialize).then(() => {
   aurelia.use
     .standardConfiguration()
     .developmentLogging()
     // Install and configure the plugin
     .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

   return aurelia.start().then(a => a.setRoot());
 });
}
