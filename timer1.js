
// creating a simple timer that beeps at lengths determined by the command line arguments

//pull command line arguments into an array then sort them from lowest to highest



const times = process.argv.slice(2);
times.sort((a, b) => a - b);

// start function for the timer
const timer = (intervals) => {

  // set a time for just after the last timer call
  let end = (times[(times.length - 1)]) + 1

// check for negative time
  if (times[0] < 0) {
    return console.log('Error can not have negative time')
  };

  // check for not a number

  if (intervals.some(interval => isNaN(interval))) {
    return console.log('Error, non number detected!!');
  }
    

  //initalize a timer count at 0
  let timer = 0;

  // create a loop based on size of intervals array
  for (let i = 0; i < intervals.length; i++) {
 
     //set timeout to "beep" (or print a dot on my system)
    setTimeout(() => {
      process.stdout.write('.');
    }, timer);

    // increase timer to next interval 

    timer += intervals[i];
  }

  // Close the function by returning a newline character using the end

  setTimeout(() => {
    process.stdout.write('\n');
  }, end)

  return;
};



timer(times);

