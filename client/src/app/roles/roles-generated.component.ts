/*
  This file is automatically generated. Any changes will be overwritten.
  Modify roles.component.ts instead.
*/
import { Injector, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { SecurityService } from '../security.service';

/*
  Component properties set from design-time.
*/
const { components } = require('../../../../meta/pages/roles.json');

export class RolesGenerated implements OnInit, OnDestroy {
  components = components;
  // Array of messages displayed by the notification component.
  messages = [];

  router: Router;

  route: ActivatedRoute;

  _location: Location;

  subscription: Subscription;

  security: SecurityService;

  getRolesResult: any;

  parameters: any;

  Security: any;

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this instanceof <any>this.route.component) {
        this.parameters = this.route.snapshot.params;

        this.load();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  load() {
    this.security.getRoles()
    .then(result => {
      this.getRolesResult = result;
    }, result => {

    });
  }

  button0Click(event: any) {
    this.router.navigate([{ outlets: { popup: null } }]).then(() => this.router.navigate(['create-role']));
  }

  grid0Delete(event: any) {
    this.security.deleteRole(`${event.id}`)
  }

  constructor(injector: Injector) {
    this.router = injector.get(Router);

    this._location = injector.get(Location);

    this.route = injector.get(ActivatedRoute);

    this.security = injector.get(SecurityService);
  }
}