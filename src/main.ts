import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(`ORg4AjUWIQA/Gnt2VVhhQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFiUH9fc3VUQmZeVk0=
`);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
