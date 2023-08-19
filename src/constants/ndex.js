import iconArcade from '../assets/icon-arcade.svg'
import iconAdvanced from '../assets/icon-advanced.svg'
import iconPro from '../assets/icon-pro.svg'


export const StepsItems = [
  {
    id: 1,
    title:'YOUR INFO',
    subTitle:'STEP 1'
  },
  {
    id: 2,
    title:'SELECT PLAN',
    subTitle:'STEP 2'
  },
  {
    id: 3,
    title:'ADD-ONS',
    subTitle:'STEP 3'
  },
  {
    id: 4,
    title:'SUMMARY',
    subTitle:'STEP 4'
  }
]

export const PlansInfo = [
  {
    name:'Arcade',
    month: '$9/mo',
    year:'$90/yr',
    img: iconArcade
  },
  {
    name:'Advanced',
    month: '$12/mo',
    year:'$120/yr',
    img: iconAdvanced
  },
  {
    name:'Pro',
    month: '$15/mo',
    year:'$150/yr',
    img: iconPro
  }
]

export const AddonsItems = [
  {
    id:'1',
    title:'Online service',
    subTitle:'Access to multiplayer games',
    monthlyPlan:'+$1/mo',
    yearlyPlan:'+10/yr'

  },
  {
    id:'2',
    title:'Large Storage',
    subTitle:'Extra 1TB of Cloud Save',
    monthlyPlan:'+$2/mo',
    yearlyPlan:'+20/yr'

  },
  {
    id:'3',
    title:'Customizable Profile',
    subTitle:'Custom Theme on your profile',
    monthlyPlan:'+$2/mo',
    yearlyPlan:'+20/yr'
  },
]