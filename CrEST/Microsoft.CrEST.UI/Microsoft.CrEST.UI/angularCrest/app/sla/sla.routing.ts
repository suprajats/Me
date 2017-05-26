﻿import { Routes, RouterModule} from '@angular/router';
import { SowComponent } from './sow/landing/sow.component';
import { SowFormComponent } from './sow/sow-form/sow-form.component';

import { SlaApplicationComponent } from './application/application.component';
import { SlaServiceComponent } from './serviceline/serviceline.component';
import { SlaDashboardComponent } from './dashboard/dashboard.component';
import { ServicelineFormComponent } from './serviceline/serviceformaddupdate.component';
import { SlpComponent } from './slp/slp.component';
import { ApplicationFormComponent } from './application/application-form.component';


const slaRoutes: Routes = [
    { path: 'sows', component: SowComponent, pathMatch: 'full' },
    { path: 'sows/add', component: SowFormComponent },
    { path: 'sows/applicationStatus', component: SowComponent },
    { path: 'sows/:id', component: SowFormComponent },

    { path: 'applications', component: SlaApplicationComponent, pathMatch: 'full' },
    { path: 'applications/add', component: ApplicationFormComponent },
    { path: 'applications/applicationStatus', component: SlaApplicationComponent },
    { path: 'applications/:id', component: ApplicationFormComponent },

    { path: 'services', component: SlaServiceComponent, pathMatch: 'full' },
    { path: 'services/add', component: ServicelineFormComponent },
    { path: 'services/:id', component: ServicelineFormComponent },

    { path: 'slps', component: SlpComponent, pathMatch: 'full' },

    { path: 'sladashboard', component: SlaDashboardComponent, pathMatch: 'full' }
]

export const SlaRouting = RouterModule.forChild(slaRoutes);