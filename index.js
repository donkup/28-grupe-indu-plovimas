const Plates = require('./Plates');

const restaurant = new Plates('Jonas');

restaurant.intro();
// Hi, this restaurant has no plates! Please, buy some.

restaurant.buyPlates(50);
// // restaurant purchased 50 plates.


restaurant.intro();
// // Hi, this restaurant has 50 plates!

restaurant.usePlates(20);
// // restaurant has made some dishes for 20 plates.

restaurant.cleanPlatesCount();
// // restaurant has 30 clean plates.

restaurant.usePlates(20);
// // restaurant has made some dishes for 20 plates.

restaurant.cleanPlatesCount();
// // restaurant has 10 clean plates.

restaurant.usePlates(20);
// // restaurant has 10 plates only, it's not enough. No action is taken.

restaurant.cleanUp(60);
// // restaurant does not have so many dirty plates.

restaurant.buyPlates(10);
// // restaurant purchased 10 plates.

restaurant.usePlates(20);
// // restaurant has made some dishes for 20 plates.

restaurant.cleanPlatesCount();
// // restaurant is left with no clean plates.

restaurant.cleanUp(60);
// // All plates in the restaurant is clean!

restaurant.intro();