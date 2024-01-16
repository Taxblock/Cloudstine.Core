export class IncomeTaxEFillingRequestMaster {
    IncomeTaxEFillingRequestId: number;
    ServiceRequestId: number;
    ServiceRequestUserId: number;
    UserId: number | null;
    ServiceId: number | null;
    RequestNo: string;
    ClassificationId: number | null;
    ChargeAmount: number | null;
    PaidAmount: number | null;
    BalanceAmount: number | null;
    RefundAmount: number | null;
    IsRefund: boolean | null;
    AssignTo: number | null;
    AssignOn: string | null;
    StatusId: number | null;
    StartTime: string | null;
    EndTime: string | null;
    JobChangeTypeMasterId: number;
    SalaryEarnTypeMasterId: number;
    WorkInfoTypeMasterId: number;
    GroupAmount: number | null;
    TaxAmount: number | null;
    IsSpecialClient: boolean | null;
    DiscountAmount: number | null;
    DiscountPercent: number | null;
    URID: string | null;
}