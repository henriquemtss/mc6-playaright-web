// @ts-check
import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test('Teste Login QAZando', async ({ page }) => {

  await page.goto('https://automationpratice.com.br/register');
  await page.locator('#user').fill('qazando');
  await page.locator('#email').fill('qazando@gmail.com');
  await page.locator('#password').fill('qazando123');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  


});


