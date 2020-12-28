import { ActivatedRoute } from '@angular/router';
import { ExpertService } from './../../services/expert.service';
import { AvisService } from './../../services/avis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allavis',
  templateUrl: './allavis.component.html',
  styleUrls: ['./allavis.component.css']
})
export class AllavisComponent implements OnInit {
  allavis:any;
  allavis1:any;
user:any;
a:any;
userjson:any;
id=this.activited.snapshot.params.id

  constructor(private activited:ActivatedRoute,private avisservice:AvisService,private expertservice : ExpertService) { }

  ngOnInit(): void {

    this.getAllavis()
    }
    getAllavis  (){
      this.avisservice.getoneavis(this.id).subscribe( (res3:any) =>{
        this.allavis=res3.data

        console.log(this.allavis)

      })
    }


  }
