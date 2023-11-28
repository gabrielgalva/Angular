import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './controle-acesso/controle-acesso.component'
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListItemsComponent,
    FormCadastroComponent,
    ControleAcessoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
