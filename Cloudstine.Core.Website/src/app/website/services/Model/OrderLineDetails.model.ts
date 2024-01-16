export class OrderLineDetails {
    ServiceName: string;
    Classification: string;
    OrderLineId: number;
    OrderId: number;
    ServiceId: number;
    ClassificationId: number;
    TariffName: string;
    ServicePaymentTypeId: number;
    InvoicedAmount: number;
    PaidAmount: number;
    RefundAmount: number;
    BalanceAmount: number;
    ChargeAmount: number;
    OrderAmountExclusiveTax: number;
    TotalChargeAmountInclusiveTax: number;
    TotalDiscountAmount: number;
    DiscountAmount: number;
    DiscountPercentage: number;
    NetAmount: number;
    TotalNetAmount: number;
    TotalTaxAmount: number;
    Quantity: number;
    ServiceCount: number;
    PaymentRequestedAmount: number;
    BalancePaymentRequestAmount: number;
    IsActive: boolean;
}