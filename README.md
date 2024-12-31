# MongoDB $in Operator Misuse

This repository demonstrates a common error when using the `$in` operator in MongoDB queries.  The example shows an incorrect implementation that leads to unexpected behavior. The solution provides the correct way to use the `$in` operator. 

## Problem
The `$in` operator in MongoDB is used to check if a field's value exists within an array. However, it's often misused when attempting to match an entire object or a nested field. In this case the code attempts to use `$in` with a query object instead of individual values.