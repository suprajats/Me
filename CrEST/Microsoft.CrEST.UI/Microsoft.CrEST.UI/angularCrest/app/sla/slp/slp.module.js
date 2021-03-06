var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HotTableModule } from 'ng2-handsontable';
import { SlpComponent } from './slp.component';
import { SlpService } from '../shared/services/slp.service';
import { SlpBusiness } from '../shared/business/slp.business';
var SlpModule = (function () {
    function SlpModule() {
    }
    return SlpModule;
}());
SlpModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            HttpModule,
            HotTableModule
        ],
        declarations: [
            SlpComponent
        ],
        exports: [
            SlpComponent
        ],
        providers: [
            SlpService, SlpBusiness
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], SlpModule);
export { SlpModule };
//# sourceMappingURL=slp.module.js.map