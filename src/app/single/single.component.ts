import { Component } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {MarvelService} from "@services/marvel.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {
  // charId:string;
  charId= '';
  constructor(private route: ActivatedRoute,private marvelService: MarvelService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
     this.charId = params["id"];
      this.marvelService.getSingleCharacter(this.charId).subscribe(({ data }) => {
        console.log(data.results);
      });
    });
  }
}
