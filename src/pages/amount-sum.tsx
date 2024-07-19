import React, { useState } from 'react'

const AmountSum = () => {
    const jsonData = [
        {
            "expandedItems": [
                { "label": "[msgid default_costs.origin_title]", "value": undefined },
                { "label": "[msgid default_costs.destination_title]", "value": undefined },
                { "label": "[msgid default_costs.port_loading_title]", "value": undefined },
                { "label": "[msgid default_costs.est_amt_title]", "value": "CA$51" },
                { "label": "[msgid default_costs.created_by_header]", "value": "Waqar Ahmed" }
            ],
            "view": {
                "createdBy": "Waqar Ahmed",
                "destination": undefined,
                "estAmt": { "amount": "CA$51", "currency": "CAD" },
                "estAmtCAD": { "amount": "CA$51", "currency": "CAD" },
                "fxRate": { "currency": "CAD", "rate": null },
                "origin": undefined,
                "portDischarge": undefined,
                "portLoading": undefined,
                "previousDeal": null,
                "previousMatchedOffer": null,
                "provider": null,
                "service": "Document Delivery",
                "status": "pending"
            }
        },
        {
            "expandedItems": [
                { "label": "Item 1", "value": "Value 1" },
                { "label": "Item 2", "value": "Value 2" },
                { "label": "Item 3", "value": "Value 3" }
            ],
            "view": {
                "createdBy": "John Doe",
                "destination": "New York",
                "estAmt": { "amount": "US$100", "currency": "USD" },
                "estAmtCAD": { "amount": "CA$130",  "currency": "CAD" },
                "fxRate": { "currency": "USD", "rate": 1.3 },
                "origin": "London",
                "portDischarge": "Port of New York",
                "portLoading": "Port of London",
                "previousDeal": null,
                "previousMatchedOffer": null,
                "provider": "Some Company",
                "service": "Shipping",
                "status": "confirmed"
            }
        },
    ];
    // console.log("jsonData", jsonData)

    const result = [];
    for (let i = 0; i < jsonData.length; i++) {
        let num = jsonData[i].view.estAmtCAD.amount;
        result.push(Number(num.substring(3)));
    }
    console.log("result", result)

    // const total = result.reduce((currVal, accumulator) => {
    //     return currVal + accumulator
    // }, 0)
    // console.log("total", total)
    const total = jsonData.reduce((currVal, accumulator) => {
        return currVal + Number(accumulator.view.estAmtCAD.amount.split('$')[1])
    }, 0)
    return (
        <div className='text-4xl text-center'>Sum is: {total}
        </div>
    )
}

export default AmountSum;
