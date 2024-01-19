export class UserProfile {
    UserId: number;
    Name: string;
    MobileNo: number;
    EmailId: string;
    GSTINNO: number | null;
    PANNO: number;
    OrganisationName:string;
    FlatDoor:number;
    BuildingName: string;
    RoadStreet:string;
    City:string;
    PINCode:number;
    StateId:number;
    IsGSTInvoiceRequired:boolean;
    AreaLocality:string;
    AddedBy: number | null;
    Addedate: Date | string | null;
    UpdatedBy: number | null;
    UpdatedDate: Date | string | null;
}
