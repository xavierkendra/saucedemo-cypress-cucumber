class checkoutElements {

    botaoCheckout = () => {return '[data-test="checkout"]'};
    campoFirstName = () => {return '[data-test="firstName"]'};
    campoLastName = () => {return '[data-test="lastName"]'};
    campoPostalCode = () => {return '[data-test="postalCode"]'};
    botaoContinue = () => {return '[data-test="continue"]'};
    botaoFinish = () => {return '[data-test="finish"]'};
    mensagemSucesso = () => {return '#checkout_complete_container'};
    botaoHome = () => {return '[data-test="back-to-products"]'};
    mensagemErro = () => {return '[data-test="error"]'};
    checkoutInfo = () => {return '.checkout_info'};

}

export default checkoutElements;