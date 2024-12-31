```javascript
const myQueryValue = 'value';

// Correct use of $in operator
db.collection('myCollection').find( { field: { $in: [myQueryValue] } } ).toArray( (err, docs) => {
  console.log(docs);
});

//Alternative for more complex queries
const myQuery = { field: 'value', otherField: 'otherValue'};
db.collection('myCollection').find(myQuery).toArray( (err, docs) => {
  console.log(docs);
});
```