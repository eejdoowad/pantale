const setup_procedures = [
  './setup/setup_ascii_db',
  './setup/setup_blog_db'
];

setup_procedures.forEach((value, index) => {
  require(value);
  console.log(index + '. ' + value);
});