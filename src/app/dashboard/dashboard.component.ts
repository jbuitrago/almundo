/**
 * @author Raul Perez
 * @description The main application run on dashboard
 */

import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotels.service';
import { Hotel } from '../models/hotel';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public hotels: Hotel[];
  public imagesUrl = environment.API_ENDPOINT + '/images/hotels/';
  public stars: number[];
  public hotelSearch = '';
  public check1 = false;
  public check2 = false;
  public check3 = false;
  public check4 = false;
  public check5 = false;
  public checkAll = true;
  public errorImg = '../../assets/images/error.jpg';
  constructor(public _hotel: HotelService) {

  }

  ngOnInit() {
    this._hotel.getHotels().subscribe(response => {
      this.hotels = response;

    });
  }

  /* Method to uncheck all the checkers */
  unCheckAll() {
    this.check1 = false;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.check5 = false;
    this.searchHotels();
  }
/* Method to uncheck the Check of all stars */
  checked() {
    this.checkAll = false;
    setTimeout(() => this.searchHotels(), 10);
  }

/* Method to search hotels by name or by stars */
  searchHotels() {
    let starSearch = '';
    let search = '';
    if (this.check1) {
      starSearch = starSearch.concat('&star1=true');
    }
    if (this.check2) {
      starSearch = starSearch.concat('&star2=true');
    }
    if (this.check3) {
      starSearch = starSearch.concat('&star3=true');
    }
    if (this.check4) {
      starSearch = starSearch.concat('&star4=true');
    }
    if (this.check5) {
      starSearch = starSearch.concat('&star5=true');
    }
    if (this.hotelSearch) {
      search = 'name=' + this.hotelSearch ;
    }

    console.log(starSearch);
    this._hotel.search(search + starSearch).subscribe(response => {
      this.hotels = response;

    });
  }

/* Method to find images url */
  lookImage(image: string): string {
    return this.imagesUrl + image;
  }
/* Method to find icons url */
  lookIcon(icon: string): string {
    return '../../assets/icons/amenities/' + icon + '.svg';
  }

  /* Method to show the correct qty of stars to show */
  totalStars(stars: number): number[] {
    switch (stars) {
      case 1:
        this.stars = [1];
        break;
      case 2:
        this.stars = [1, 2];
        break;
      case 3:
        this.stars = [1, 2, 3];
        break;
      case 4:
        this.stars = [1, 2, 3, 4];
        break;
      case 5:
        this.stars = [1, 2, 3, 4, 5];
        break;
      default:
        this.stars = [];
    }
    return this.stars;
  }


}
