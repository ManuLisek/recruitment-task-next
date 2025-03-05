/** @type {import("eslint").Linter.FlatConfigItem[]} */
module.exports = [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: require("@typescript-eslint/parser"),
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            react: require("eslint-plugin-react"),
            "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
        },
        rules: {
            "no-unused-vars": "warn",
            semi: ["error", "always"],
        },
    },
];
