import Swicth from "react-switch";
import {Logo} from "Components/Logo"
import {MoonSVG} from "Components/Moon"
import {SunSVG} from "Components/Sun"

import { 
  DropDown,
  HomeContainer, 
  MenuContainer 
} from "./styles";
import { ArrowDown } from "Components/ArrowDown";

import { useThemeContext } from "Hooks/useThemeContext";

export function Home() {

  const {ToogleTheme, theme} = useThemeContext()

  return (
    <HomeContainer>
      {/* Menu */}
      <MenuContainer>
        <Logo />

        {/* Theme Switch */}
        <div>
          <Swicth 
            onChange={ToogleTheme}
            checked={theme.tittle === "light"}
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: `${theme.colors.background}`,
                  paddingRight: 2
                }}
              >
                <SunSVG />
              </div>
            }
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "white",
                  paddingRight: 2
                }}
              >
                <MoonSVG />
              </div>
            }
            offColor={theme.colors.icon}
            onColor={theme.colors.icon}
            height={30}
            width={60}
            handleDiameter={35}
          />
        </div>
      </MenuContainer>

      {/* Arrow Down */}
      <DropDown>
        <h2>
          Covid no Brasil
        </h2>
        <ArrowDown />
      </DropDown>

    </HomeContainer>
  );
}

