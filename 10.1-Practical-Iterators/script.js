//------------RANGE FROM 1 TO 50 --------------------//
let obj = {
    [Symbol.iterator]: function(start = 1, end = 50, interval = 1){
        let step = start
        const iterator = {
            next:function(){
                const result = {value: step, done:false}
                if(step <= end){
                    step+=interval
                    return result
                }
                return{ value: undefined, done: true}
            }
        }
        return iterator
    }
}

// for(let v of obj){
//     console.log(v)
// }
//console.log([...obj])


//------------RANGE FROM 10 TO 20 WITH 2 INCREMENT --------------------//

//------------RANGE FROM 1 TO 50 --------------------//
let obj2 = {
    [Symbol.iterator]: function(start = 10, end = 20, interval = 2){
        let step = start
        const iterator = {
            next:function(){
                const result = {value: step, done:false}
                if(step <= end){
                    step+=interval
                    return result
                }
                return{ value: undefined, done: true}
            },
        }
        return iterator
    }
}

//console.log([...obj2])
//---CUSTPM-ITERATOR----//
// const iterator = obj2[Symbol.iterator](1,5,1)
// let result = iterator.next()
// while(!result.done){
//     console.log(result.value)
//     result = iterator.next()
// }


//-------------//

const myFavouriteAuthors = {
    allAuthors: {
      fiction: [
        'Agatha Christie', 
        'J. K. Rowling',
        'Dr. Seuss'
      ],
      scienceFiction: [
        'Neal Stephenson',
        'Arthur Clarke',
        'Isaac Asimov', 
        'Robert Heinlein'
      ],
      fantasy: [
        'J. R. R. Tolkien',
        'J. K. Rowling',
        'Terry Pratchett'
      ],
    },

    [Symbol.iterator]() {
      // Get all the authors in an array
      const genres = Object.values(this.allAuthors);
      console.log(genres)
      // Store the current genre and author index
      let currentAuthorIndex = 0;
      let currentGenreIndex = 0;
      
      return {
        // Implementation of next()
        next() {
          // authors according to current genre index
          const authors = genres[currentGenreIndex];
          
          // doNotHaveMoreAuthors is true when the authors array is exhausted.
          // That is, all items are consumed.
          const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
          if (doNothaveMoreAuthors) {
            // When that happens, we move the genre index to the next genre
            currentGenreIndex++;
            // and reset the author index to 0 again to get new set of authors
            currentAuthorIndex = 0;
          }
          
          // if all genres are over, then we need tell the iterator that we 
          // can not give more values.
          const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
          if (doNotHaveMoreGenres) {
            // Hence, we return done as true.
            return {
              value: undefined,
              done: true
            };
          }
          
          // if everything is correct, return the author from the 
          // current genre and incerement the currentAuthorindex
          // so next time, the next author can be returned.
          return {
            value: genres[currentGenreIndex][currentAuthorIndex++],
            done: false
          }
        }
      };
    }
  };
  
  for (const author of myFavouriteAuthors) {
    console.log(author);
  }
  
  console.log(...myFavouriteAuthors)