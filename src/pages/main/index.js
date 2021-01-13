import { MainPage } from "./MainPage";
import { withMainPage } from "./withMainPage";

const ConnectedMainPage = withMainPage(MainPage);

export { ConnectedMainPage as MainPage };
