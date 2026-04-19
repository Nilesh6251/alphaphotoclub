module.exports = {
  apps: [{
    name: "apex-photoclub-api",
    script: "./server.js",
    instances: "max",
    exec_mode: "cluster",
    watch: false,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
