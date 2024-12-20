const chalk = require('chalk');

function logger(message, level = 'info', value = "") {
    const now = new Date().toISOString();
    const colors = {
        info: chalk.green,
        warn: chalk.yellow,
        error: chalk.red,
        success: chalk.blue,
        debug: chalk.magenta,
    };
    const color = colors[level] || chalk.white;
    console.log(color(`[${now}] [${level.toUpperCase()}]: ${message}`), chalk.yellow(value));
}

module.exports = { logger };
