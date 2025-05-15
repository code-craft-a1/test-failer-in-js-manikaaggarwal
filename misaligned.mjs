import { expect } from 'chai';

const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

const majorColorLength = majorColors.length;
const minorColorLength = minorColors.length;

function getMajorColor(i){
  if(i<0|| i> majorColorLength){
    throw new Error("Invalid index for major color");
  }
  return majorColors[i];
}

function getMinorColor(i){
  if(i<0|| i>5){
    throw new Error("Invalid index for minor color");
  }
  return minorColors[i];
}

function getPairNo(i, j){
  if(i<0|| i>5 || j<0||j>5){
    throw new Error("Invalid index for minor color");
  }
  return i * 5 + j;
}

function print_color_map() {
    for (let i = 0; i < majorColorLength; i++) {
        for (let j = 0; j < minorColorLength; j++) {
            console.log(`${getPairNo(i,j)} | ${getMajorColor(i)} | ${getMinorColor(j)}`);
        }
    }
    return majorColorLength * minorColorLength;
}

const result = print_color_map();
expect(result).equals(25);
expect(getMajorColor(0)).equals("White");
expect(getMinorColor(1)).equals("Blue");
expect(getPairNo(0,0)).equals(1);


console.log('All is well (maybe!)');
