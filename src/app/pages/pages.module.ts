import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { FiguresComponent } from './figures/figures.component';
import { GroupsComponent } from './groups/groups.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages.routes';
import { MenuComponent } from '../components/menu/menu.component';
import { FigureListComponent } from '../components/figure-list/figure-list.component';
import { FormNewComponent } from '../components/form-new/form-new.component';
import { FormEditComponent } from '../components/form-edit/form-edit.component';
import { NavComponent } from '../components/nav/nav.component';
import { GroupListComponent } from '../components/group-list/group-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [PerfilComponent, 
     FiguresComponent,
     GroupsComponent,
     DashboardComponent,
     MenuComponent,
     FigureListComponent,
     FormNewComponent,
     FormEditComponent,
     NavComponent,
     GroupListComponent
     
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  bootstrap:[
    DashboardComponent
  ]
})
export class PagesModule { }
