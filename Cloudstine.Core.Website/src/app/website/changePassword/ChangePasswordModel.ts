export class ChangePasswordModel {
    UserId: number | null;
    PasswordHash: string; // as old password
    NewPassword:string;
    IsActive: boolean | null;
    AddedBy: number | null;
    AddedDate: Date | string | null;
    UpdatedBy: number | null;
    UpdatedDate: Date | string | null;
}