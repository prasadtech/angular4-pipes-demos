import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { CamelCasePipePipe } from './camel-case-pipe.pipe';
import { MycustomPipeDemoPipe } from './mycustom-pipe-demo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CamelCasePipePipe,
    MycustomPipeDemoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
