`use strict`;

{
  //2000 4 11
  const d = new Date(2000, 3, 11);
  // const dBackup = d;
  // const dBackup = new Date(d.getFullYear(), d.getMonth(),d.getDate())
  const dBackup = new Date(d.getTime());
  d.setDate(23);

  console.log(d.toLocaleString());//23
  console.log(dBackup.toLocaleString());//11
}