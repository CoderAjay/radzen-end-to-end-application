/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-order.component.ts instead.
*/
import { Injector, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { TestService } from '../test.service';
import { SecurityService } from '../security.service';

/*
  Component properties set from design-time.
*/
const { components } = require('../../../../meta/pages/edit-order.json');

export class EditOrderGenerated implements OnInit, OnDestroy {
  components = components;
  // Array of messages displayed by the notification component.
  messages = [];

  router: Router;

  route: ActivatedRoute;

  _location: Location;

  subscription: Subscription;

  security: SecurityService;

  test: TestService;

  order: any;

  getOrderDetailsResult: any;

  getOrderDetailsCount: any;

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
    this.test.getOrderById(this.parameters.Id)
    .then(result => {
      this.order = result;
    }, result => {

    });

    this.test.getOrderDetails(`OrderId eq ${this.parameters.Id}`, this.components[1].allowPaging ? this.components[1].pageSize : null, this.components[1].allowPaging ? 0 : null, null, this.components[1].allowPaging)
    .then(result => {
      this.getOrderDetailsResult = result.value;

      this.getOrderDetailsCount = this.components[1].allowPaging ? result['@odata.count'] : result.value.length;
    }, result => {

    });
  }

  form0Cancel(event: any) {
    this._location.back();
  }

  form0Submit(event: any) {
    this.test.updateOrder(this.parameters.Id, this.order)
    .then(result => {
      this.router.navigate([{ outlets: { popup: null } }]).then(() => this.router.navigate(['orders']));
    }, result => {
      this.messages.push({ severity: "error", summary: `Error`, detail: `Unable to update Orderwith Id:${this.parameters.Id}` });
    });
  }

  grid0Add(event: any) {
    if (window.innerWidth >= 500) { 
      this.router.navigate([{ outlets: { popup: ['add-order-detail', this.parameters.Id] } }]);
    } else {
      this.router.navigate(['add-order-detail', this.parameters.Id]);
    }
  }

  grid0Delete(event: any) {
    this.test.deleteOrderDetail(event.Id)
  }

  grid0LoadData(event: any) {
    this.test.getOrderDetails(`${event.filter}`, this.components[1].allowPaging ? event.top : null, this.components[1].allowPaging ? event.skip : null, `${event.orderby}`, this.components[1].allowPaging)
    .then(result => {
      this.getOrderDetailsResult = result.value;

      this.getOrderDetailsCount = this.components[1].allowPaging ? result['@odata.count'] : result.value.length;
    }, result => {

    });
  }

  constructor(injector: Injector) {
    this.router = injector.get(Router);

    this._location = injector.get(Location);

    this.route = injector.get(ActivatedRoute);

    this.test = injector.get(TestService);
    this.security = injector.get(SecurityService);
  }
}