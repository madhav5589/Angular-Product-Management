import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';

@Component({
    selector: 'products',
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": ""
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": ""
    }];

    ngOnInit() {
        console.log("In OnInit");
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}