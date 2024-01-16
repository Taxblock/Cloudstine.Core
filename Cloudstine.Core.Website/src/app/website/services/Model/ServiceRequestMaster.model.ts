export class ServiceRequestMaster{
    ServiceRequestId: number;
    RequestNo: number;
    UserId: string;
    ClientProfileId: number;
    ClassificationId: number;
    ServiceId: string;
    TariffId: number | null;
    OrderLineId: number | null;
    ServiceAmount: number | null;
    TaxAmount: number | null;
    DiscountAmount: number | null;
    DiscountPercent: number | null;
    ChargeAmount: number | null;
    InvoicedAmount: number | null;
    PaidAmount: number | null;
    BalanceAmount: number | null;
    BalanceWithoutTax: number | null;
    RefundAmount: number | null;
    IsRefund: boolean | null;
    AssignTo: number | null;
    AssignOn: string | null;
    StatusId: number | null;
    StartTime: string | null;
    EndTime: string | null;
    URID: string;
    ClientStatusId: number | null;
    FYAYId: number | null;
}