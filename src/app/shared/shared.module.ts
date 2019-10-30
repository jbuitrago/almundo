import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatMenuModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatExpansionModule, MatNativeDateModule } from '@angular/material';
import { MatCardModule, MatSidenavModule, MatInputModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { MatGridListModule, MatSlideToggleModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatStepperModule
  ],
  declarations: [
  ],
  exports: [
    MatStepperModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
