var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
var ConstantService = (function () {
    function ConstantService(_config) {
        this._config = _config;
        this.apiBaseUrl = _config.get("apiBaseUri");
        this.apiBaseUrlWithVersion = this.apiBaseUrl + "/api/v1.0";
        this.CONFIG = {
            apiLocations: {
                baseUrl: this.apiBaseUrl,
                getApplication: 'http://localhost:53430/api/Application/GetAllApplications',
                addApplication: 'http://localhost:53430/api/Application/SaveApplication',
                findApplicationUrl: 'http://localhost:53430/api/Application/FindApplication/',
                getApplicationbyId: 'http://localhost:53430/api/Application/GetApplicationById/',
                //getsow: 'http://localhost:52537/configMetadata/sample.json',
                getservice: 'http://localhost:52537/configMetadata/service.json',
                getapplicationMetaData: 'http://localhost:53430/api/Application/GetApplicationMetadata',
                //sow
                //getsow: this.apiBaseUrl + 'api/sow'
                getsow: 'http://localhost:52537/configMetadata/sow.json',
                //slp
                //getCurrentPeriodSlpByUserAlias: this.apiBaseUrl + 'api/getCurrentPeriodSlpByUserAlias'
                getCurrentPeriodSlpByUserAlias: 'http://localhost:52537/configMetadata/slp.json',
                saveSLPs: this.apiBaseUrl + 'api/slp/saveSLP',
                generateSLPforCurrentPeriod: this.apiBaseUrl + 'api/slp/generateSLPforCurrentPeriod',
                getSlps: 'http://localhost:52537/configMetadata/slp.json'
            }
        };
    }
    return ConstantService;
}());
ConstantService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], ConstantService);
export { ConstantService };
//# sourceMappingURL=constants.service.js.map