import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
loginbtn:boolean;
logoutbtn:boolean;

constructor(private dataService: ApiService) {
dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true
}
else{
this.loginbtn=true;
this.logoutbtn=false
}

}

private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout()
{
this.dataService.deleteToken();
window.location.href = window.location.href;
}
}
