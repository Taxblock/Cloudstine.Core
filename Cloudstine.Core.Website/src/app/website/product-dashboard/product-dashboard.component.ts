import { Component, OnInit } from '@angular/core';
import { ProductDashboardService } from './product-dashboard.service'
import { AlertService } from 'app/core/services/alertService';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  //Purchase Product Array
  purchaseProduct: any = [
    {
      ApplicationId: 1,
      ApplicationName: 'SmartTDS',
      ApplicationDetails: 'File your TDS return smartly on cloud application ',
      logo: 'assets/images/Home_Page/CRED.png'
    },

    {
      ApplicationId: 3,
      ApplicationName: 'E-Form16',
      ApplicationDetails: 'Cloud application to generate Form-16 and its ann.',
      logo: 'assets/images/Home_Page/Emsecure.png'
    },
    {
      ApplicationId: 4,
      ApplicationName: 'E-Way Bills',
      ApplicationDetails: 'Electronic Way bill for movement of goods',
      logo: 'assets/images/Home_Page/Taxblock.png'
    },
    {
      ApplicationId: 6,
      ApplicationName: 'ITR-Filling',
      ApplicationDetails: 'ITR Filling by advisor',
      logo: 'assets/images/Home_Page/CSG.png'
    },
    {
      ApplicationId: 9,
      ApplicationName: 'HRA Calculator',
      ApplicationDetails: 'Calculate your Taxable & Exempt HRA',
      logo: 'assets/images/Home_Page/CRED.png'
    },
  ]

  // All Product Array
  allProduct: any = [
    {
      incomeTax: [
        {
          ApplicationId: 6,
          ApplicationName: 'ITR-Filling',
          ApplicationDetails: 'ITR Filling by advisor',
          logo: 'assets/images/Home_Page/CSG.png'
        },
        {
          ApplicationId: 7,
          ApplicationName: 'Self-Filling',
          ApplicationDetails: 'Self ITR Filling',
          logo: 'assets/images/Home_Page/Taxblock.png'
        },
        {
          ApplicationId: 5,
          ApplicationName: 'E-POI',
          ApplicationDetails: 'Proof of Investment Verification',
          logo: 'assets/images/Home_Page/Sudarshan.png'
        },
        {
          ApplicationId: 8,
          ApplicationName: 'Tax-Engine',
          ApplicationDetails: 'API for Tax related calculations',
          logo: 'assets/images/Home_Page/Sudarshan.png'
        },
        {
          ApplicationId: 2,
          ApplicationName: 'ERI-API',
          ApplicationDetails: 'API for ITR filling by E-Return Intermarries',
          logo: 'assets/images/Home_Page/Dell.png'
        },
        {
          ApplicationId: 9,
          ApplicationName: 'HRA Calculator',
          ApplicationDetails: 'Calculate your Taxable & Exempt HRA',
          logo: 'assets/images/Home_Page/CRED.png'
        },
        {
          ApplicationId: 10,
          ApplicationName: 'HP Simulation ',
          ApplicationDetails: 'Know which Property to Deemed Let Out',
          logo: 'assets/images/Home_Page/CRED.png'
        }
      ]
    },
    {
      TDS: [
        {
          ApplicationId: 11,
          ApplicationName: 'Smart TDS',
          ApplicationDetails: 'File your TDS return smartly on cloud application',
          logo: 'assets/images/Home_Page/CRED.png'
        },
        {
          ApplicationId: 12,
          ApplicationName: 'E-form 16',
          ApplicationDetails: 'Cloud application to generate Form-16',
          logo: 'assets/images/Home_Page/CRED.png'
        }
      ]
    }, {
      SAP: [
        {
          ApplicationId: 13,
          ApplicationName: 'SAP FI',
          ApplicationDetails: 'Complete version of their financial transaction data',
          logo: 'assets/images/Home_Page/CRED.png'
        },
        {
          ApplicationId: 14,
          ApplicationName: 'HCR',
          ApplicationDetails: 'Human capital managment',
          logo: 'assets/images/Home_Page/CRED.png'
        }
      ]
    },
    {
      GST: [
        {
          ApplicationId: 17,
          ApplicationName: 'E-Way Bill',
          ApplicationDetails: 'Electronic way bill for movements of good',
          logo: 'assets/images/Home_Page/CRED.png'
        },
        {
          ApplicationId: 19,
          ApplicationName: 'E-invoice',
          ApplicationDetails: 'Generate GST invoice',
          logo: 'assets/images/Home_Page/CRED.png'
        }
      ]
    },
    {
      Other: [
        {
          ApplicationId: 15,
          ApplicationName: '80G Receipt',
          ApplicationDetails: 'Generate 80G receipt in bulk',
          logo: 'assets/images/Home_Page/CRED.png'
        },
        {
          ApplicationId: 16,
          ApplicationName: 'Rent Receipt',
          ApplicationDetails: 'Generate rent receipt in bulk',
          logo: 'assets/images/Home_Page/CRED.png'
        }
      ]
    }
  ];
  incomeProduct: any[] = [];
  TDS: any[] = [];
  SAP: any[] = [];
  GST: any[] = [];
  Other: any[] = [];

  constructor(private ProductDashboardService: ProductDashboardService, private alertService: AlertService,) {
    //IncomeTax
    this.allProduct.forEach((productCategory) => {
      if (productCategory.incomeTax) {
        this.incomeProduct.push(...productCategory.incomeTax);
      }
    });
    //TDS
    this.allProduct.forEach((element) => {
      if (element.TDS) {
        this.TDS.push(...element.TDS);
      }
    });
    //SAP
    this.allProduct.forEach((element) => {
      if (element.SAP) {
        this.SAP.push(...element.SAP);
      }
    });
    //GST
    this.allProduct.forEach((element) => {
      if (element.GST) {
        this.GST.push(...element.GST);
      }
    });
    //Other
    this.allProduct.forEach((element) => {
      if (element.Other) {
        this.Other.push(...element.Other);
      }
    });
  }

  ngOnInit(): void {
    // this.getAllProductList();
    // this.getPurchaseProduct();
  }
  getAllProductList() {
    return this.ProductDashboardService.getAllProduct().subscribe(
      (result: any) => {
        this.allProduct = result.Value;
      },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      }
    );
  }
  getPurchaseProduct() {
    return this.ProductDashboardService.getPurchaseProduct().subscribe((result: any) => {
      this.purchaseProduct = result.value;
    },
      (error: any) => {
        this.alertService.ShowErrorMessage(error.error);
      });
  }

}
