export class SignUpModel {
  ClientProfileId: number;
    EmailId : string;
    PasswordHash: string;
    //confirmpassword: string;
    PANNo : string;
    MobileNo : number;
    URID: string| null;
    CorporateName: string | null;
    // DateOfBirth: Date | string | null;
    // EstablishedDate: Date | string | null;
    AddedBy: number | null; 
    AddedDate:  Date | string | null;
    UpdatedBy: number | null;
    UpdatedDate: Date | string | null;    
  
}