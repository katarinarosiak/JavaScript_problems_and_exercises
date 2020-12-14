let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    let hardBoundedFun = function (number) {
      return this.name + ' ' + number;
    }.bind(this);
    return [1, 2, 3].map(hardBoundedFun);
  },
};

console.log(franchise.allMovies());