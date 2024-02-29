import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 session : any;

 constructor(private router:Router){}

  ngOnInit(): void {
    this.getSession();
  }

  getSession(){
    const listeSession = localStorage.getItem('session');
    if(listeSession){
      this.session= JSON.parse(listeSession);
    }
  }


  gostat(){
    this.router.navigate(['app/statistiques']);
  }

  goserv(){
    this.router.navigate(['app/liste-services']);
  }

  gosouserv(){
    this.router.navigate(['app/liste-sous-services'])
  }

  godesc(){
    this.router.navigate(['app/description'])
  }

  goemp(){
    this.router.navigate(['app/liste-employe'])
  }

  goli(){
    this.router.navigate(['app/offres'])

  }

  goadd(){
    this.router.navigate(['app/liste-offre'])
  }

  goacc(){
    this.router.navigate(['app/accueil']);
  }

}
