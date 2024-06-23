import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly user = "Ramirez";
  private readonly password = "12345";

  constructor() { }

  login(usuario: string, password: string): boolean{
    if(usuario == this.user && password == this.password)
    sessionStorage.setItem("usuario", usuario);
  return true
  }

  logout():void{
    sessionStorage.clear()    
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("usuario");
  }

}