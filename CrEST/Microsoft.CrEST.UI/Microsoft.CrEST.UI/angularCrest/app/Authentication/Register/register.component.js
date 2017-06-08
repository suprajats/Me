var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validation';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
var RegisterComponent = (function () {
    function RegisterComponent(fb, router, userService, alertservice) {
        this.router = router;
        this.userService = userService;
        this.alertservice = alertservice;
        this.model = {};
        this.loading = false;
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            roletype: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {
            validator: PasswordValidation.MatchPassword
        });
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.registerUser(this.model.username, this.model.password, this.model.roleid)
            .subscribe(function (data) {
            _this.alertservice.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertservice.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Component({
        templateUrl: 'register.component.html',
    }),
    __metadata("design:paramtypes", [FormBuilder, Router,
        UserService, AlertService])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map