import Select from "./components/select";

class OceanWP {
    constructor() {
        this.select = new Select();
    }

    start = () => {};
}

("use script");

window.oceanwp = new OceanWP();
oceanwp.start();
