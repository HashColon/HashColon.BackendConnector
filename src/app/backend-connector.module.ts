import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module'
import { BackendConnectorViewerComponent } from '@HashColonBackend/backend-connector-viewer.component';



@NgModule({
  declarations: [BackendConnectorViewerComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [
    BackendConnectorViewerComponent
  ]
})
export class BackendConnectorModule { }
