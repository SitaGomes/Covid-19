import { Menu } from "Components/Menu"
import { Gap } from "Components/Gap";
import { Tittle } from "Components/Tittle";
import {SocialDistance} from "Components/SocialDistance";
import {CleanHands} from "Components/CleanHands";

import { 
  HeroContainer,
  DropDown,
  CovidProtection,
  SocialDistanceContainer,
  TextDescription,
  CleanHandsContainer
} from "./styles";
import { Footer } from "Components/Footer";

export function Home() {

  return (
    <>
      <HeroContainer>
        
        {/* Menu */}
        <Menu />

        <DropDown>
          Corona Vírus no Brasil
        </DropDown>
        
      </HeroContainer>

      <Gap />

      <CovidProtection>

        <Tittle>
          Se Proteja, para proteger os outros!
        </Tittle>

        <Gap />

        {/* Section */}
        <SocialDistanceContainer>

          <SocialDistance />

          <TextDescription>
            Use máscaras quando for sair e mantenha um distanciamento social.
          </TextDescription>

        </SocialDistanceContainer>

        <Gap />

        {/* Section */}
        <CleanHandsContainer>

          <CleanHands />

          <TextDescription>
            Lave suas mãos sempre que possível.
          </TextDescription>

        </CleanHandsContainer>

        <Footer />

      </CovidProtection>
    </>
  );
}

