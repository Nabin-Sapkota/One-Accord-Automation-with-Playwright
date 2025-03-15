import {defineConfig} from "@playwright/test"

export default defineConfig({
    use: {
        baseURL : 'https://admin.dev.oneaccord.cc/login'
        
    }
})