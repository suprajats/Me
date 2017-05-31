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
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ConstantService } from '../../../config/constants.service';
import { CommonService } from '../../../shared/common.service';
var SlpService = (function () {
    function SlpService(_constantService, commonService, http) {
        this._constantService = _constantService;
        this.commonService = commonService;
        this.http = http;
        this.saveSLPs = _constantService.CONFIG.apiLocations.saveSLPs;
        this.generateSLPforCurrentPeriod = _constantService.CONFIG.apiLocations.generateSLPforCurrentPeriod;
        this.getSlps = _constantService.CONFIG.apiLocations.getSlps;
        this.getReportingPeriod = _constantService.CONFIG.apiLocations.getReportingPeriod;
        this.getRASlps = _constantService.CONFIG.apiLocations.getRASlps;
        this.exportToExcel = _constantService.CONFIG.apiLocations.exportToExcel;
    }
    SlpService.prototype.GetReportingPeriods = function () {
        var header = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.getReportingPeriod, { headers: header })
            .map(function (res) { return res.json(); }).catch(this.commonService.handleError);
    };
    SlpService.prototype.GetSlps = function (period, useralias) {
        var header = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.getSlps + "/" + period, { headers: header })
            .map(function (res) { return res.json(); }).catch(this.commonService.handleError);
    };
    SlpService.prototype.SaveSLPs = function (data) {
        var header = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: header });
        return this.http.post(this.saveSLPs, data, options)
            .map(function (res) { return res.text(); }).catch(this.commonService.handleError);
    };
    SlpService.prototype.GenerateSLPforCurrentPeriod = function (currentFP, createdBy) {
        var header = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.generateSLPforCurrentPeriod + "/" + currentFP + "/" + createdBy, { headers: header })
            .map(function (res) { return res.text(); }).catch(this.commonService.handleError);
    };
    SlpService.prototype.GetRASlps = function () {
        var header = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.getRASlps, { headers: header })
            .map(function (res) { return res.json(); }).catch(this.commonService.handleError);
    };
    SlpService.prototype.ExportToExcel = function (fiscalPeriod) {
        var header = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.exportToExcel + '/' + fiscalPeriod, { headers: header })
            .map(function (res) { return res.json(); }).catch(this.commonService.handleError);
    };
    return SlpService;
}());
SlpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConstantService, CommonService, Http])
], SlpService);
export { SlpService };
//# sourceMappingURL=slp.service.js.map