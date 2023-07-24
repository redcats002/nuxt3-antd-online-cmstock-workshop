# TypeScript

Nuxt 3 is fully typed and provides helpful shortcuts to ensure you have access to accurate type information when you are coding.

## Type-checking

By default, Nuxt doesn't check types when you run nuxi dev or nuxi build, for performance reasons. However, you can enable type-checking at build or development time by installing vue-tsc and typescript as devDependencies and either enabling the typescript.typeCheck option in your nuxt.config file or manually checking your types with nuxi.

```bash
yarn nuxi typecheck
```

## Auto-generated Types

When you run nuxi dev or nuxi build, Nuxt generates the following files for IDE type support (and type checking):

## Stricter Checks

TypeScript comes with certain checks to give you more safety and analysis of your program.
Once you’ve converted your codebase to TypeScript and felt familiar with it, you can start enabling these checks for greater safety (read more).
In order to enable strict type checking, you have to update `nuxt.config`:

```ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
});
```
