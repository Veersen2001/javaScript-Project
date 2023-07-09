function checkValidLinkedInUrl(url) {
  const pattern = /^https:\/\/www.linkedin.com\/in\/[\w\-]{5,30}[a-zA-Z0-9]$/;
  if (pattern.test(url)) {
    console.log("The LinkedIn profile URL is valid.");
  } else {
    console.log("The LinkedIn profile URL is not valid.");
  }
}

// Test cases
checkValidLinkedInUrl("https://www.linkedin.com/in/johndoe123");    // Valid URL
checkValidLinkedInUrl("https://www.linkedin.com/in/john-doe");    // Valid URL
checkValidLinkedInUrl("https://www.linkedin.com/in/john_doe");    // Valid URL
checkValidLinkedInUrl("https://www.linkedin.com/in/john_doe_123");    // Valid URL
checkValidLinkedInUrl("https://www.linkedin.com/in/johndoe");    // Invalid URL (less than 5 characters)
checkValidLinkedInUrl("https://www.linkedin.com/in/johndoe1234567890123456789012");    // Invalid URL (more than 30 characters)
checkValidLinkedInUrl("https://www.linkedin.com/profile/johndoe");    // Invalid URL (different path)
checkValidLinkedInUrl("https://www.linkedin.com/in/john@doe");