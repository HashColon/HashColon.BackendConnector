import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { BackendConnectorViewerComponent } from '@HashColonBackend/backend-connector-viewer.component';


@NgModule({
  declarations: [
    BackendConnectorViewerComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, MaterialModule
  ]
})
export class BackendConnectorModule { }
