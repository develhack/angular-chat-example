import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { ShouldNotAuthenticatedGuard } from './guards/should-not-authenticated.guard';
import { ShouldAuthenticatedGuard } from './guards/should-authenticated.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [ShouldNotAuthenticatedGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [ShouldAuthenticatedGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
