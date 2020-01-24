export class Product {
    showDetail: boolean;
    constructor(public name: string, public detail: string, public price: number, public manufacturedate: string) {
        this.showDetail = false;
    }
}
