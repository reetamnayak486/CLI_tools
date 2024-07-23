#!/usr/bin/env node

// const yargs= require("yargs")
// const {argv}= yargs(process.argv);

const inquirer=require("inquirer");

// console.log({argv});
const print_five_moves= async(pokemon)=>{
    let response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let pokemon_object= await response.json();
    const moves= pokemon_object.moves.map(({move})=> move.name);
    console.log(moves.slice(0,5));
}

// print_five_moves(argv.pokemon);
// // console.log(argv.pokemon);
// console.log(process.argv);

const prompt= inquirer.createPromptModule();
prompt([{
        type: "input",
        name: "pokemon",
        message: "enter the name of a pokemon",
    },
]).then((answers)=>{
    const pokemon=answers.pokemon;
    // console.log(answers);
    print_five_moves(pokemon);
});