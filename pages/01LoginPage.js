class LoginPage{
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator("//input[@name = 'email']")
        this.passwordInput = page.locator("//input[@name = 'password']")
        this.loginButton = page.locator("//button[@type='submit']")

    }
    async navigateToLogin(){
        await this.page.goto("https://admin.dev.oneaccord.cc/login");
    }

    async login(email, password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
export default LoginPage