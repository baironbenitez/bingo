import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FiguresComponent } from './figures/figures.component';
import { GroupsComponent } from './groups/groups.component';
import { FormEditComponent } from '../components/form-edit/form-edit.component';
import { FormNewComponent } from '../components/form-new/form-new.component';


const routes: Routes = [
   {path:'',component:DashboardComponent,
   children:[
    {path:'',redirectTo:'perfil',pathMatch:'full'},
    {path:'perfil',component:PerfilComponent},
    {path:'figure',component:FiguresComponent},
    {path:'figure/:id',component:FormEditComponent},
    {path:'create/figure',component:FormNewComponent},
    {path:'group',component:GroupsComponent}
   ]
   },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
