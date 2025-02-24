import WebDevelopment from "../../assets/web-dev.png"
import UIDesign from "../../assets/ui-design.png"; 
import Matrimonials from "../../assets/matrimonial.png"; 
import AppDevelopment from "../../assets/app-development.png"; 
import MachineLearning from "../../assets/machine-learning.png"; 
import Marketings from "../../assets/marketing.png"; 
import HumanResource from "../../assets/human-resource.png"; 
import CustomerService from "../../assets/customer-service.png"; 
import CyberSecurity from "../../assets/cyber-security.png"; 
import SoftwareDev from "../../assets/software-dev.png"; 
import CloudComput from "../../assets/cloud-comp.png"; 
import DataAnalyt from "../../assets/data-analytics.png"; 
import Networking from "../../assets/networking.png"; 
import Healthcare from "../../assets/healthcare.png"; 
import RealEstate from "../../assets/real-estate.png"; 
import Travel from "../../assets/travel-tourism.png"; 
import BlockChain from "../../assets/blockchain.png"; 
import TechConsulting from "../../assets/tech-consulting.png"; 
import Gaming from "../../assets/gaming.png"; 
import Iot from "../../assets/internet-of-things.png"; 
import DevOps from "../../assets/devops.png"; 
import Agriculture from "../../assets/agriculture.png"; 
import Automotive from "../../assets/automotive.png"; 
import ArtsCrafts from "../../assets/arts-&-crafts.png"; 
import EventPlann from "../../assets/event-planning.png"; 
import SportsRec from "../../assets/sports-&-recreation.png"; 
import Entertainment from "../../assets/entertainment.png"; 
import BeautyCos from "../../assets/beauty-cosmetics.png"; 
import PetService from "../../assets/pet-service.png"; 
import TechInnovation from "../../assets/tech-innovation.png"; 
import VirtualNet from "../../assets/private-network.png"; 
import ELearning from "../../assets/e-learning.png"; 
import OutdoorAdv from "../../assets/outdoor-adv.png"; 
import PreventFam from "../../assets/preventing-&-family.png"; 
import GardenLand from "../../assets/gardening.png"; 
import photography from "../../assets/photography.png"; 
import FoodDeliver from "../../assets/devops.png"; 
import CategoriesUx from "../categoriesPopup/popup/uxPopup";
import Pop from "../categoriesPopup/popup/popup";
import CategoriesMatro from "../categoriesPopup/popup/matroPopup";
import CategoriesApp from "../categoriesPopup/popup/appPopup";
import CategoriesMachine from "../categoriesPopup/popup/machinePopup";
import CategoriesMarketing from "../categoriesPopup/popup/marketingPopup";
import Human from "../categoriesPopup/popup/humanPopup";
import Customer from "../categoriesPopup/popup/customerPopup";
import Cyber from "../categoriesPopup/popup/cyberPopup";
import Software from "../categoriesPopup/popup/softwarePopup";
import Cloud from "../categoriesPopup/popup/cloudPopup";
import Datanalytic from "../categoriesPopup/popup/dataPopup";
import Network from "../categoriesPopup/popup/networkPopup";
import Health from "../categoriesPopup/popup/healthPopup";
import Realestate from "../categoriesPopup/popup/realstatePopup";
import Travell from "../categoriesPopup/popup/travelPopup";
import Blockchain from "../categoriesPopup/popup/blockPopup";
import Tech from "../categoriesPopup/popup/techPopup";
import Gamingg from "../categoriesPopup/popup/gamignPopup";
import IOT from "../categoriesPopup/popup/iotPopup";
import DevOpss from "../categoriesPopup/popup/devPopup";
import Agri from "../categoriesPopup/popup/agriculturePopup";
import Automotives from "../categoriesPopup/popup/autoPopup";
import Arts from "../categoriesPopup/popup/artsPopup";
import Event from "../categoriesPopup/popup/eventPopup";
import Sports from "../categoriesPopup/popup/sportsPopup";
import Entertainments from "../categoriesPopup/popup/entertainmentPopup";
import Beauty from "../categoriesPopup/popup/beautyPopup";
import Pet from "../categoriesPopup/popup/petPopup";
import Innovation from "../categoriesPopup/popup/innvoPopup";
import Virtual from "../categoriesPopup/popup/virtualPopup";
import Learning from "../categoriesPopup/popup/learningPopup";
import Outdoor from "../categoriesPopup/popup/outdoorPopu";
import Parenting from "../categoriesPopup/popup/parentingPopup";
import Gardening from "../categoriesPopup/popup/gardeningPopup";
import Photo from "../categoriesPopup/popup/photoPopup";
import Food from "../categoriesPopup/popup/foodPopup";

const categories = [
  
  {
    id: 1,
    name: "Web Development",
    type: "IT",
    image: WebDevelopment,
    popup: Pop
  },
  { 
    id: 2, 
    name: "UX/UI Design", 
    type: "IT", 
    image: UIDesign, 
    popup: CategoriesUx
  },
  {
    id: 3,
    name: "Matrimonial",
    type: "Non IT",
    image: Matrimonials,
    popup: CategoriesMatro
  },
  { 
    id: 4, 
    name: "App Development", 
    type: "IT", 
    image: AppDevelopment,
    popup: CategoriesApp
  },
  {
    id: 5,
    name: "Machine Learning",
    type: "IT",
    image: MachineLearning,
    popup: CategoriesMachine
  },
  { 
    id: 6, 
    name: "Marketing", 
    type: "Non IT", 
    image: Marketings, 
    popup: CategoriesMarketing
  },
  {
    id: 7,
    name: "Human Resource",
    type: "Non IT",
    image: HumanResource,
    popup: Human
  },
  { 
    id: 8, 
    name: "Customer Service", 
    type: "Non IT", 
    image: CustomerService, 
    popup: Customer
  },
  {
    id: 9,
    name: "Cyber Security",
    type: "IT",
    image: CyberSecurity,
    popup: Cyber
  },
  { 
    id: 10, 
    name: "Software Development", 
    type: "IT", 
    image: SoftwareDev, 
    popup: Software
  },
  {
    id: 11,
    name: "Cloud Computing",
    type: "IT",
    image: CloudComput,
    popup: Cloud
  },
  { 
    id: 12, 
    name: "Data Analytics", 
    type: "IT", 
    image: DataAnalyt,
    popup: DataAnalyt 
  },
  {
    id: 13,
    name: "Networking",
    type: "IT",
    image: Networking,
    popup: Network
  },
  { 
    id: 14, 
    name: "Healthcare", 
    type: "Non IT", 
    image: Healthcare,
    popup: Health
  },
  {
    id: 15,
    name: "Real Estate",
    type: "Non IT",
    image: RealEstate,
    popup: Realestate
  },
  { 
    id: 16, 
    name: "Travel & Tourism", 
    type: "Non IT", 
    image: Travel, 
    popup: Travell
  },
  {
    id: 17,
    name: "Blockchain",
    type: "IT",
    image: BlockChain,
    popup: Blockchain
  },
  { 
    id: 18, 
    name: "Tech Consulting", 
    type: "Non IT", 
    image: TechConsulting,
    popup: Tech
  },
  { 
    id: 19, 
    name: "Gaming", 
    type: "IT", 
    image: Gaming,
    popup: Gamingg
  },
  { 
    id: 20, 
    name: "Internet of Things (IoT)", 
    type: "IT", 
    image: Iot, 
    popup: IOT
  },
  { 
    id: 21, 
    name: "DevOps", 
    type: "IT", 
    image: DevOps,
    popup: DevOpss
  }, 
  { 
    id: 22, 
    name: "Agriculture", 
    type: "Non IT", 
    image: Agriculture,
    popup: Agri
  }, 
  { 
    id: 23, 
    name: "Automotive", 
    type: "Non IT", 
    image: Automotive,
    popup: Automotives
  }, 
  { 
    id: 24, 
    name: "Arts & Crafts", 
    type: "Non IT", 
    image: ArtsCrafts ,
    popup: Arts
  }, 
  { 
    id: 25, 
    name: "Event Planning", 
    type: "Non IT", 
    image: EventPlann,
    popup: Event
  }, 
  { 
    id: 26, 
    name: "Sports & Recreation", 
    type: "Non IT", 
    image: SportsRec,
    popup: Sports
  },
   { 
    id: 27, 
    name: "Entertainment", 
    type: "Non IT", 
    image: Entertainment,
    popup: Entertainments
  }, 
  { 
    id: 28, 
    name: "Beauty & Cosmetics", 
    type: "Non IT", 
    image: BeautyCos,
    popup: Beauty
  },
   { 
    id: 29, 
    name: "Pet Services", 
    type: "Non IT", 
    image: PetService,
    popup: Pet  
  },
  {
    id: 30,
    name: "Tech Innovation",
    type: "Non IT",
    image: TechInnovation,
    popup: Tech
  },
  {
    id: 31,
    name: "Virtual Private Network",
    type: "IT",
    image: VirtualNet,
    popup: Virtual
  }, 
  {
    id: 32,
    name: "E-Learning Platforms",
    type: "Non IT",
    image: ELearning,
    popup: Learning
  }, 
  {
    id: 33,
    name: "Outdoor & Adventure",
    type: "Non IT",
    image: OutdoorAdv,
    popup: Outdoor
  },
   {
    id: 34,
    name: "Parenting & Family",
    type: "Non IT",
    image: PreventFam,
    popup: Parenting
  }, 
  {
    id: 35,
    name: "Gardening & Landscaping",
    type: "Non IT",
    image: GardenLand,
    popup: Gardening
  }, 
  {
    id: 36,
    name: "Photography",
    type: "Non IT",
    image: photography,
    popup: Photo
  }, 
  {
    id: 37,
    name: "Food Delivery",
    type: "Non IT",
    image: FoodDeliver,
    popup: Food
  },

];
  
  export default categories;
  