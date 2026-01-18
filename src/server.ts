import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 3001;
async function server() {
  try {
    await prisma.$disconnect();
  } catch (error) {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}

server();
