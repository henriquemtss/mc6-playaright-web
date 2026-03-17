import test from "@playwright/test";
const { abrirSite, digitarEmail, digitarSenha, clicarBotaoLogin, validarLoginSucesso } = require('./page-login');


test('Teste Login QAZando', async ({ page }) => {
    await abrirSite(page)
    await digitarEmail(page)
    await digitarSenha(page)
    await clicarBotaoLogin(page)
    await validarLoginSucesso(page)
})