import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { HeroComponent } from './hero/hero.component';
import { TindogplusComponent } from './tindogplus/tindogplus.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './messages/messages.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'home', component: HeroComponent },
  { path: 'tindogplus', component: TindogplusComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'messages/:data', component: MessagesComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
