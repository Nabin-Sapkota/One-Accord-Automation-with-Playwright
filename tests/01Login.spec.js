import {test, expect} from '@playwright/test'
import LoginPage from '../pages/01LoginPage'
import exp from 'constants';
test.describe.parallel("Login Tests", () =>{

    test ("Try login without email and password", async({page}) =>{
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login("", "");

        await expect(page).toHaveURL("https://admin.dev.oneaccord.cc/login");// check if the user is still in the login page

        await expect(page.locator("//div[@aria-describedby='Email']")).toHaveText(/.+/)  ///.+/ → Ensures that there is at least one character inside the element (i.e., the text is not empty). this checks whether there is validation message underneath email field

        await expect (page.locator("//div[@aria-describedby='Password']")).toHaveText(/.+/); // this checks whether there is validation message underneath password field

    })

    test("Login with invalid email and password", async({page}) =>{
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login("invalidemail@gmail.com", "invalidPassword");

        await expect(page).toHaveURL("https://admin.dev.oneaccord.cc/login");
        await expect(page).toHaveTitle("Login | One Accord") // this checks if the user is still in same page by checking with the title of login page itself and also by validating the login page url
    } )

    test("Login with valid username but invalid password", async({page}) =>{

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login("nabin98452@gmail.com", "invalidPassword");

        await expect(page).toHaveURL("https://admin.dev.oneaccord.cc/login");
        await expect(page).toHaveTitle("Login | One Accord") // this checks if the user is still in same page by checking with the title of login page itself also by validating the login page url
    } )
    test("Login with valid username and password", async({page}) =>{
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login("nabin98452@gmail.com", "Password@123");

        await expect(page).toHaveURL("https://admin.dev.oneaccord.cc/dashboard");
        await expect(page).toHaveTitle("Dashboard"); // this checks if the user is logged in by validating with the title of dashboard and url of dashboard
        

    })
 })