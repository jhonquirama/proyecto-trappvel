import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { LoginComponent } from "./components/login/login.component";
import { UserComponent } from "./components/user/user.component";
import { RegisterComponent } from "./components/register/register.component";
import { UserResolver } from "./components/user/user.resolver";
import { AuthGuard } from "./core/auth.guard";
import { AuthService } from "./core/auth.service";
import { UserService } from "./core/user.service";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { rootRouterConfig } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
