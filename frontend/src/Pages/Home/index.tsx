import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom"
import { database } from "Service/Database";

import { ArrowDown } from "Components/ArrowDown";
import { Menu } from "Components/DesktopMenu"

import { 
  DropDown,
  HomeContainer, 
} from "./styles";


import {BiggestDataProps, CovidProps, DatabaseProps} from "Types"

const axios = require('axios')

export function Home() {

  const [biggestNumberOfDeaths, setBiggestNumberOfDeaths] = useState(0 as number)
  const [biggestNumberOfCases, setBiggestNumberOfCases] = useState(0 as number)
  
  const history = useHistory()

  //! API call
  useEffect(() => {

    const options = {
      method: 'get',
      url: 'http://localhost:3003/cases/months/one'
    }

    const getOneMonth = async () => {
      const res = await axios(options)
      const {data} = res
      const {cases} = data

      const CasesLenght = cases.length

      const allData: BiggestDataProps = {
        numberOfDeaths: 0,
        numberOfCases: 0,
      }

      const mapCases = (covid: CovidProps, index: number) => {

        if (index === 0) {
          allData.numberOfCases = covid.Confirmed
          allData.numberOfDeaths = covid.Deaths
        }

        if (covid.Deaths > allData.numberOfDeaths) {
          allData.numberOfDeaths = covid.Deaths
        }

        if (covid.Confirmed > allData.numberOfCases) {
          allData.numberOfCases = covid.Confirmed
        }
        
        if (index === CasesLenght - 1) {
          setBiggestNumberOfDeaths(allData.numberOfDeaths)
          setBiggestNumberOfCases(allData.numberOfCases)
        }
      }
      cases.forEach(mapCases)
    }
    
    getOneMonth()
  })

 
    //! Database post
    const  GoToMMM = async () => {
      
      const organizedData: DatabaseProps = {
        Covid: {
          Cases: biggestNumberOfCases,
          Deaths: biggestNumberOfDeaths,
        }
      }

      history.push("/mmm")
    }


  return (
    <HomeContainer>
      
      {/* Menu */}
      <Menu />

    </HomeContainer>
  );
}

