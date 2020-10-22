const dev = {
  NAME: "Development Mode",
  API_URL: "http://play.my.lego.k8s.xyz:3020",
  API_URL_SCM: "http://play.my.legok8s.xyz:3030",
  s3: {
    BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
  }
};

const staging = {
  NAME: "Staging Mode",
  // API_URL: "http://staging.questcode.org",
  API_URL: "http://play.my.legok8s.xyz:30020",
  API_URL_SCM: "http://play.my.legok8s.xyz:30030",
  s3: {
    BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
  }
};

const prod = {
  NAME: "Production",
  API_URL: "http://play.my.legok8s.xyz",
  s3: {
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  }
};

const config =
  process.env.REACT_APP_STAGE === "production"
    ? prod
    : process.env.REACT_APP_STAGE === "staging"
      ? staging
      : dev;

/*
let config;
if (process.env.REACT_APP_STAGE === "production") {
  config = prod;
} else if (process.env.REACT_APP_STAGE === "staging") {
  config = staging;
} else {
  config = dev;
}
*/

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
