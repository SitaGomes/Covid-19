import { Menu } from "Components/Menu"
import { Gap } from "Components/Gap";
import { Tittle } from "Components/Tittle";
import {SocialDistance} from "Components/SocialDistance";
import {CleanHands} from "Components/CleanHands";
import { Footer } from "Components/Footer";
import { ArrowDown } from "Components/ArrowDown";

import AOS from 'aos';

import { 
  HeroContainer,
  DropDown,
  CovidProtection,
  SocialDistanceContainer,
  TextDescription,
  CleanHandsContainer
} from "./styles";


export function Home() {

  AOS.init()

  return (
    <>
      <HeroContainer>
        
        {/* Menu */}
        <Menu />

        <DropDown
        >
          
          <h2>
            Corona Vírus no Brasil
          </h2>

          <ArrowDown />

        </DropDown>
        
      </HeroContainer>

      <Gap />

      <CovidProtection>

        <div data-aos="fade-up">
          <Tittle>
            Se Proteja, para proteger os outros!
          </Tittle>
        </div>

        <Gap />

        {/* Section */}
        <SocialDistanceContainer data-aos="fade-right">

          <SocialDistance />

          <TextDescription>
            Use máscaras quando for sair e mantenha um distanciamento social.
          </TextDescription>

        </SocialDistanceContainer>

        <Gap />

        {/* Section */}
        <CleanHandsContainer data-aos="fade-right">

          <TextDescription>
            Lave suas mãos sempre que possível.
          </TextDescription>
          
          <CleanHands />

        </CleanHandsContainer>

        <Footer />

      </CovidProtection>
    </>
  );
}

