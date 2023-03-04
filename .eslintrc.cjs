module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-async-promise-executor": "error",
        "no-await-in-loop": "error",
        "no-promise-executor-return": "error",
        "no-return-await": "error",
    }
}
