import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("----------->>", this.route.snapshot.params)
  }
}
