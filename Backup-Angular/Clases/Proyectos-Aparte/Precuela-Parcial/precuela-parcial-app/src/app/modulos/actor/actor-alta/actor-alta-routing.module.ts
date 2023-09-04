import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorAltaComponent } from 'src/app/components/actor/actor-alta/actor-alta.component';

const routes: Routes = [
  {
    path: '',
    component: ActorAltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorAltaRoutingModule { }
