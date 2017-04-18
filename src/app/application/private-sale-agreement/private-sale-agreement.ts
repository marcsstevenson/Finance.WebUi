import { VendorDetails } from "app/application/private-sale-agreement/vendor-details";
import { PurchaserDetails } from "app/application/private-sale-agreement/purchaser-details";
import { VehicleDetails } from "app/application/private-sale-agreement/vehicle-details";

export class PrivateSalesAgreement {
    public VendorDetails: VendorDetails = new VendorDetails();
    public PurchaserDetails: PurchaserDetails = new PurchaserDetails();
    public VehicleDetails: VehicleDetails = new VehicleDetails();
    public EncumbranceAmount: string = '';
    public EncumbranceTo: string = '';
    public AgreedSalePrice: number = null;
    public Transport: number = null;
    public Extras: number = null;
    public Deposit: number = null;

    public getBalancePayable(): number {
        var balance = 0;

        if (this.AgreedSalePrice)
            balance += this.AgreedSalePrice;

        if (this.Transport)
            balance += this.Transport;
            
        if (this.Extras)
            balance += this.Extras;
            
        if (this.Deposit)
            balance -= this.Deposit;

        return balance;
    }
}