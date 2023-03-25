import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//Se llama la funcion y se le pasa de parametro el precio de la consulta
//Por ejemplo: {paypal("15.99")} el numero debe tener punto y dos decimales
//El usuario es: gabriel.coelho@correo.unimet.edu.ve
//La contraseña es: Afterglow
function Paypal(precio_consulta){
    return(
        <PayPalScriptProvider options={{"client-id": "AZNmzJqJ5XDBRUiSn-2gy8pvMxsbshgyFJHnOrD8-ofQ72Fn00z9GGtg6qnmf4MfTGS6MZ2Lx2Lh5zhf"}}>
            <PayPalButtons createOrder={(data, actions) => {
                    return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: precio_consulta,
                                    },
                                },
                            ],
                        });
                    }}
                onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    const name = details.payer.name.given_name;
                    alert("Payment Completed! ");
                }}        
            />
        </PayPalScriptProvider>
    )
}

export default Paypal;