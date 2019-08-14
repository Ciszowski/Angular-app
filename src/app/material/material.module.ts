import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule,
       MatCheckboxModule, 
       MatListModule, 
       MatIconModule,
       MatInputModule,
       MatCardModule,
       MatGridListModule,
       MatTabsModule,
       MatFormFieldModule,
       MatToolbarModule,
      MatTooltipModule} from '@angular/material';

const MaterialComponent=[
  LayoutModule,
  MatTooltipModule,
  MatSidenavModule,
  MatSelectModule,
  MatRadioModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
]

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
