import React, {useRef, useEffect, useState} from "react";
//import Axios from "axios";

export default function Paypal() {
    const paypal = useRef()


    useEffect(() => {
        window.paypal_sdk.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: 101.01,
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)


            },

            onError: (err) => {
                console.log(err)
            }

        }).render(paypal.current)
    }, [])
    return(
        <div>
            <div ref={paypal}></div>
        </div>
    )
} 