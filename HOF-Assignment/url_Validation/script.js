function check_valid_url(url) {
  const pattern = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+$/;
  if (pattern.test(url)) {
    console.log("The URL is valid.");
  } else {
    console.log("The URL is not valid.");
  }
}
check_valid_url("http://example.com"); // Valid URL
check_valid_url("https://www.example.com"); // Valid URL
check_valid_url("http://123.example.com"); // Valid URL
check_valid_url("https://example"); // Invalid URL
check_valid_url("ftp://example.com"); // Invalid URL
