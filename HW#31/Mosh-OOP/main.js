/* 
Create a stopwatch object with the following characteristics:

A duration property

Three Methods:
Reset
Start
Stop

Methods should throw out an error if repeated twice

*/

// class Stopwatch {
//     constructor () {
//         this.duration = 0;
//         this.startTime = 0;
//         this.endTime = 0;
//         this.isOn = 0;
//     }

//     start(){
//         if (this.isOn){
//             throw new Error('Stopwatch has already started');
//         }
//         this.isOn = 1;
//         this.startTime = new Date();
//     }
//     stop(){
//         if (!this.isOn){
//             throw new Error('Stopwatch has already stopped')
//         }
//         this.isOn = 0
//         this.endTime = new Date();
//         let totalTime = (this.endTime - this.startTime) / 1000
//         this.duration = `Elapsed time of ${totalTime} seconds`;
//     }

//     reset(){

//         this.duration, this.startTime, this.endTime, this.isOn = 0;
//     }

// }

// let watch = new Stopwatch


//Refactor after watching MOSH Solution //


function Stopwatch () {

    this.duration = 0; // only public variable
    let startTime, stopTime, running = 0 ; // Private variables

    this.start = function () {
        if (running){
            throw new Error ('Stopwatch is already On');
        }
        running = 1;
        startTime = new Date();
    }
    
    this.stop = function() {
        if (!running){
            throw new Error('Stopwatch is not currently running')
        }
        running = 0; // using falsy and truthy
        stopTime = new Date();
        let totalTime = (stopTime - startTime) / 1000 // private and locally scoped to inside of the stop() method
        this.duration += totalTime;
    }

    this.reset = function () {
        startTime, stopTime, running = 0; //Reset variables
        this.duration = 0;
    }
}   

let watch = new Stopwatch;

