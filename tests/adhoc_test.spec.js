import { test, expect } from '@playwright/test';
import exp from 'constants';

// Define user credentials and input variables
const sapUser = "teso";
const sapUserPassword = "@Tifede1995@Bafede1999";
const material = "90";
const batch = "1600007382"; // Variable name changed to lowercase
const quantity = "50";

test('Perform Adhoc IM PI Regression', async ({ page}) => {
  // Navigate to the SAP login page
  await page.goto('https://sapce1.theconfigteam.co.uk:8443/neptune/webapp/?launchpad=NEPTCT_WM&sap-client=100&sap-language=EN');

  //Assertion: validates the page contains the correct URL
  await expect(page).toHaveURL('https://sapce1.theconfigteam.co.uk:8443/neptune/webapp/?launchpad=NEPTCT_WM&sap-client=100&sap-language=EN');

  //Assertion: validates the title page is found
  await expect(page).toHaveTitle('Logon');

  //Assertion: page locator is visible
  const sapUserId = await page.locator('#sap-user');
  await expect(sapUserId).toBeVisible();

  // Login
  await page.locator('#sap-user').fill(sapUser);
  await page.locator('#sap-password').fill(sapUserPassword);
  await page.getByRole('button', { name: 'Log On' }).click();

  // Navigate to menu
  await page.getByRole('group', { name: 'PreBilt IM/WM Menu Avatar' }).click();
});
