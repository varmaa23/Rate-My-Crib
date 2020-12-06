let factors = ["Studying", "Partying", "Sleeping", "Potluck", "Snack",
   "Outdoor", "Swank","Temperature" ,"Light" ,"Smell", "Weird", "View", 
   "Community","Art", "Sport" , "Music", "Privacy", "Loud", "Old" ]
factors = factors.map((factor) => {
  return factor.toLowerCase();
})


const ratings_initial = [];

factors.forEach((factor) => (
  ratings_initial.push({
    id: factor,
    rating: 0
  })
));

const avgWeight = 1/factors.length;

console.log(avgWeight)

export {factors, ratings_initial};