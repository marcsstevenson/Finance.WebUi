import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DealerService, Dealer } from '../dealer.service';
import { DealersData } from '../mockup-data';


@Component({
  moduleId: module.id,
  selector: 'app-dealer-detail',
  templateUrl: 'dealer-detail.component.html',
  styleUrls: ['dealer-detail.component.css'],
  providers: [DealerService]
})
export class DealerDetailComponent implements OnInit, OnDestroy {

  private dealer: any = DealersData[0];
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dealerService: DealerService
  ) { }

  ngOnInit() {

    // this.sub = this.route.params.subscribe(params => {
    //   let id = +params['id'];
    //   this.dealerService.getDealer(id).then(
    //     dealer => {
    //       this.dealer = dealer;
    //       console.log(this.dealer);
    //     }
    //   );
    // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
