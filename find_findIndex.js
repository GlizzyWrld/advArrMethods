const users = [{username: 'mlewis'},
{username: 'akagen'},
{username: 'msmith'}];

function findUserByUsername(arr, username) {
    return arr.find(function(user){
      return user.username === username;
    })
  }

  function removeUser(arr, username){
      let nameIndex = arr.findIndex(function(user){
          return user.username === username
      })
      if(nameIndex === -1) return;
      return arr.splice(nameIndex, 1)[0];
  }