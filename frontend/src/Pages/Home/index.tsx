import { Menu } from "Components/Menu"

import { 
  HomeContainer,
  DropDown
} from "./styles";

export function Home() {

  return (
    <HomeContainer>
      
      {/* Menu */}
      <Menu />

      <DropDown>
        Corona Vírus no Brasil
      </DropDown>
      
    </HomeContainer>
  );
}

