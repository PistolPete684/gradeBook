function getGrade (s1, s2, s3) {
  // Code here
  //get the everage of the three arguments passed to the function
  let averageGrade = (s1 + s2 + s3) / 3
  //A conditional that determines what is returned depending of what the average is expressed as
  if (averageGrade >= 90) {
    return('A')
  }
  else if (averageGrade >= 80) {
    return('B')
  }
  else if (averageGrade >= 70) {
    return('C')
  }
  else if (averageGrade >= 60) {
    return('D')
  }
  else {
    return('F')
  }
}