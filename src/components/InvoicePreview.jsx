import React, { forwardRef } from 'react'
import { formatInvoiceData } from '../utils/formatInvoiceData';
import Template1 from '../templates/Template1/Template1';
import ModernTemplate from '../templates/Template 2/ModernTemplate';
import MinimalTemplate from '../templates/Template 4/MinimalTemplate';
import ProfessionalTemplate from '../templates/Template 5/ProfessionalTemplate';

const InvoicePreview = forwardRef(({invoiceData, template}, ref) => {

    const formattedData = formatInvoiceData(invoiceData);
    const renderTemplate = () => {

        switch (template) {

            case 'template1':
                return <Template1 data={formattedData} />;

            case 'template2':
                return <ModernTemplate data={formattedData} />;

            case 'template3':
                return <MinimalTemplate data={formattedData} />;

            case 'template4':
                return <ProfessionalTemplate data={formattedData} />;

            case 'template5':
                return <CreativeTemplate data={formattedData} />;

            default:
                return <Template1 data={formattedData} />;
        }
    };
    
    return (
        // invoice-preview p-2 overflow-x-auto'
        <div ref={ref} className='w-full invoice-preview'> 
           
            {renderTemplate()}
           
           

        </div>
    );
});

export default InvoicePreview
