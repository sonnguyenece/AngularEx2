import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetComponentComponent } from './pet-component/pet-component.component';
import {FormsModule} from "@angular/forms";
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponentComponent,
    FontSizeEditorComponent,
    CalculatorComponent,
    ColorPickerComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
