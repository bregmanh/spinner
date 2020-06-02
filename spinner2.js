let counter =100;
let spinner =['\r|   ', '\r/   ','\r-   ', '\r\\   ','\r|   ']

for(let i=0; i<5; i++){
  setTimeout(() => {
    process.stdout.write(spinner[i]);
  }, counter);
  counter+=100;
}

