import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes = [
  { path: '', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    SkillsComponent,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
