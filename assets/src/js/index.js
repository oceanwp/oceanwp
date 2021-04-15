import "./lib/element";
import Theme from "./theme/theme";

class OceanWP {
    start = () => {
        this.theme = new Theme();
    };
}

("use script");

window.oceanwp = new OceanWP();
oceanwp.start();
