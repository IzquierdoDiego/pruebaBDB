import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

if (environment.production) {
  enableProdMode();
}
