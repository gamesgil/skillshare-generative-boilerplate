function circles(o){noStroke();for(let r=0;r<o;r++)fill(random(0,255),random(0,255),random(0,255)),circle(random(0,width),random(0,height),random(1,50))}function boxes(o){noStroke();for(let r=0;r<o;r++)fill(random(0,255),random(0,255),random(0,255)),rect(random(0,width),random(0,height),random(5,50),random(5,50))}function random(o,r){return o+Math.floor(Math.random()*(r-o))}