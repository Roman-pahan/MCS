"use strict";

/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */
var testPosts = [{
  postId: 234,
  author: 'robd',
  commentsQty: 5
}, {
  postId: 823,
  author: 'sady'
}, {
  postId: 161,
  author: 'merryl',
  commentsQty: 8
}];

var processPosts = function processPosts(posts) {
  //  return posts.map(element => {
  //     return{
  //           postId: element.postId+1000,
  //           postAuthor: element.author,
  //           postCommentsQty: element.commentsQty||0,
  //     }
  return posts.map(function (element) {
    var postId = element.postId,
        postAuthor = element.author,
        _element$commentsQty = element.commentsQty,
        postCommentsQty = _element$commentsQty === void 0 ? 0 : _element$commentsQty;
    return {
      postId: postId + 1000,
      postAuthor: postAuthor,
      postCommentsQty: postCommentsQty
    };
  });
};

var processedPosts = processPosts(testPosts);
console.log(processedPosts);
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts); // оригинальный массив должен остаться без изменений