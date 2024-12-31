```javascript
const myQuery = { field: 'value' };

// Incorrect use of $in operator
db.collection('myCollection').find( { field: { $in: [myQuery] } } ).toArray( (err, docs) => {
  console.log(docs);
});
```