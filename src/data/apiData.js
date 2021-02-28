const url = "https://api.jsonbin.io/b/603be1ea0866664b108546b9";
const secretKey = "$2b$10$AgTzU7bySpzUlTMa4xuwT.Y.GSwY4okUERqzYphPesdnIj0G3K32q";
const headers = {
  headers: { "secret-key": secretKey, versioning: false }
};

const apiData = { url: url, headers: headers };

export default apiData;
