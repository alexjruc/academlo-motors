const app = require("./app");
const { auth, syncUp } = require("./config/dataBase/dataBase");

const { envs } = require("./config/enviroments/enviroments");

async function main() {
    try {
        await auth();
        await syncUp();
    } catch (error) {
        console.log(error);
    }
}

main();

//ToDo seleccionar puerto por donde escuchar
app.listen(envs.PORT, () => {
    console.log("server running on port: " + envs.PORT);
});
