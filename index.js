// Global Import library
import _ from 'lodash';
import { program } from 'commander';


// Local file import
import { sayHello } from './src/index-hello.js';

sayHello('John');


// CLI - Command Line Interface
// Задача оставить первую букву подставив сепаротор
program
    .option('--first')
    .option('-s, --separator <char>'); // separator передаем мы сами

program.parse();

const options = program.opts();
console.log('opts: ', options);
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));

// Old Mode
/*
const hello = (name) => {
    return `Hello, ${name}!`;
};

const command = (names, lower, upper) => {
    if(lower === undefined && upper === undefined) {
        console.log('Пропустили параметр определяющий регистр символов!');
    }

    for(const name of names) {
        const msg = hello(name);
        if(lower) {
            console.log(msg.toLocaleLowerCase());
        } else if(upper) {
            console.log(msg.toLocaleUpperCase());
        }
    }
};

program
    .option('-l, --lower', 'only use lowercase letters')
    .option('-u, --upper', 'only use uppercase letters')
    .parse(process.argv);

const { args } = program;
console.log('Массив с именами: ', args);
const options = program.opts();
console.log('Передан параметр: ', options);
const { lower, upper } = options;
console.log('М или Б регистр: ', { lower, upper });
command(args, lower, upper);*/