var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from '../shared/autocomplete/autocomplete.component';
import { UserFilterPipe } from '../shared/pipe/userfilter.pipe';
import { SearchPipe } from '../shared/pipe/search.pipe';
import { MyDatePickerModule } from 'mydatepicker';
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        imports: [BrowserModule, MyDatePickerModule,
            FormsModule],
        declarations: [
            AutoCompleteComponent, UserFilterPipe, SearchPipe
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        exports: [AutoCompleteComponent, UserFilterPipe, SearchPipe, MyDatePickerModule]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map