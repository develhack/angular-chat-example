import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInTo(['chat'])) },
  { path: 'chat', component: ChatComponent, ...canActivate(redirectUnauthorizedTo(['login'])) },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
