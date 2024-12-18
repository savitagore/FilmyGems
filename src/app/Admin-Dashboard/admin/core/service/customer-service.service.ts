import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  

  getData() {
    return [
        {
            id: 1000,
            name: 'James Butt',
            country: {
                name: 'Algeria',
                code: 'dz'
            },
            company: 'Benton, John B Jr',
            date: '2015-09-13',
            status: 'Inactive',
            verified: true,
            activity: 17,
            representative: {
                name: 'Ioni Bowcher',
                image: 'ionibowcher.png'
            },
            balance: 70663
        },
        {
            id: 1001,
            name: 'Josephine Darakjy',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chanay, Jeffrey A Esq',
            date: '2019-02-09',
            status: 'Active',
            verified: true,
            activity: 0,
            representative: {
                name: 'Amy Elsner',
                image: 'amyelsner.png'
            },
            balance: 82429
        },
        {
            id: 1002,
            name: 'Art Venere',
            country: {
                name: 'Panama',
                code: 'pa'
            },
            company: 'Chemel, James L Cpa',
            date: '2017-05-13',
            status: 'Inactive',
            verified: false,
            activity: 63,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 28334
        },
        {
            id: 1003,
            name: 'Lenna Paprocki',
            country: {
                name: 'Slovenia',
                code: 'si'
            },
            company: 'Feltz Printing Service',
            date: '2020-09-15',
            status: 'Active',
            verified: false,
            activity: 37,
            representative: {
                name: 'Xuxue Feng',
                image: 'xuxuefeng.png'
            },
            balance: 88521
        },
        {
            id: 1004,
            name: 'Donette Foller',
            country: {
                name: 'South Africa',
                code: 'za'
            },
            company: 'Printing Dimensions',
            date: '2016-05-20',
            status: 'Inactive',
            verified: true,
            activity: 33,
            representative: {
                name: 'Asiya Javayant',
                image: 'asiyajavayant.png'
            },
            balance: 93905
        },
        {
            id: 1005,
            name: 'Simona Morasca',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Chapman, Ross E Esq',
            date: '2018-02-16',
            status: 'Active',
            verified: false,
            activity: 68,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 50041
        },
        {
            id: 1006,
            name: 'Mitsue Tollner',
            country: {
                name: 'Paraguay',
                code: 'py'
            },
            company: 'Morlong Associates',
            date: '2018-02-19',
            status: 'Active',
            verified: true,
            activity: 54,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 58706
        },
        {
            id: 1007,
            name: 'Leota Dilliard',
            country: {
                name: 'Serbia',
                code: 'rs'
            },
            company: 'Commercial Press',
            date: '2019-08-13',
            status: 'Active',
            verified: true,
            activity: 69,
            representative: {
                name: 'Onyama Limba',
                image: 'onyamalimba.png'
            },
            balance: 26640
        },
        {
            id: 1008,
            name: 'Sage Wieser',
            country: {
                name: 'Egypt',
                code: 'eg'
            },
            company: 'Truhlar And Truhlar Attys',
            date: '2018-11-21',
            status: 'Active',
            verified: true,
            activity: 76,
            representative: {
                name: 'Ivan Magalhaes',
                image: 'ivanmagalhaes.png'
            },
            balance: 65369
        }
      ]
    }

    constructor(private http: HttpClient) {}
    
    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
}
