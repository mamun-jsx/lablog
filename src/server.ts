import app from "./app";

const PORT = process.env.PORT || 3001;
function server() {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}

server();
