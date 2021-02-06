# Jest Recipe to Start Postgres in a Docker Container

This repo contains a simple recipe demonstrating how to prepare a Postgres database 
in Jest's global setup.

Based on Yoni Goldberg's workshop `Unleash the Power of Node.js Component (Integration) Tests` 
in TestJS Summit 2021. Yoni's repo [here](https://github.com/testjavascript/nodejs-integration-tests-best-practices/tree/demo-enhancements).

### Step 1: Initialize a new project

```shell
npm init -y
```

### Step 2: Install TypeScript

```shell
npm install --save-dev typescript
tsc --init
```

### Step 3: Install Jest

```shell
npm install --save-dev jest ts-jest
ts-jest config:init
```

### Step 4: Create Docker Compose File with Postgres Container

### Step 5: Write the Jest Setup and Teardown files

Here is where docker compose is called to bootstrap the postgres container. Migrations also run here.
Wire up files in `jest.config.js`

## Reference

- Unleash the Power of Node.js Component (Integration) Tests | [link](https://github.com/testjavascript/nodejs-integration-tests-best-practices/tree/demo-enhancements)
- ts-jest docs installation
