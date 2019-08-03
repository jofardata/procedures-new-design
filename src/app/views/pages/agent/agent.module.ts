import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './AccountManagement/password-change/password-change.component';
import { ResetPasswordComponent } from './account-management/reset-password/reset-password.component';

const routes=[{
  path:'',
  component:AgentListComponent
},

{
  path:'create',
  component:AddAgentComponent
},
{
  path:'add-role',
  component:AddRoleComponent
},

{
  path:'reset-password',
  component:ResetPasswordComponent
}
]

@NgModule({
  declarations: [AgentListComponent, AddAgentComponent,
    ResetPasswordComponent, 
    AddRoleComponent, PasswordChangeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AgentModule { }
