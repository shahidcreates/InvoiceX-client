export const formatInvoiceData = (invoiceData) =>{
    const {
        title,
        company = {},
        invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = 0,
        notes = '',
        items = [],
        logo = '',
    } = invoiceData || {}

    const currencySymbol = "₹"
    const subTotal = items.reduce((acc,item)=> acc + (item.qty * item.amount), 0);
    const taxAmount = subTotal * (tax/100);
    const total = subTotal + taxAmount;

    return {
        title,
        companyName : company.name,
        companyAddress : company.address,
        companyPhone : company.phone,
        companyLogo : logo,

        invoiceNumber : invoice.number,
        invoiceDate : invoice.date,
        paymentDate : invoice.dueDate,

        accountName : account.name,
        accountNumber : account.number,
        accountIfseCode : account.ifseCode,

        billingName : billing.name,
        billingPhone : billing.phone,
        billingAddress: billing.address,

        shippingName : shipping.name,
        shippingPhone : shipping.phone,
        shippingAddress: shipping.address,

        currencySymbol,
        tax,
        items,
        notes,
        subTotal,
        taxAmount,
        total
    };
}