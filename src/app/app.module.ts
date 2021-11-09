import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppRouterRoutingModule} from './app-router-routing.module';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouterRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
