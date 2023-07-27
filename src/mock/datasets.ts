import { addMonths } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import {
  EquipmentInstanceInterface,
  EquipmentInterface,
  LocationInterface,
  ServiceInterface,
  ServiceScheduleInterface,
  UserInterface,
} from "../types";

//Locations
export const LocationData: LocationInterface[] = [
  { name: "YPW", city: "Powell River", _id: uuidv4() },
  { name: "YQQ", city: "Comox", _id: uuidv4() },
  { name: "YVR", city: "Vancouver", _id: uuidv4() },
  { name: "YLW", city: "Kelowna", _id: uuidv4() },
];

export const UserData: UserInterface[] = [
  {
    _id: uuidv4(),
    first_name: "Bob",
    last_name: "Smith",
    location: LocationData[0],
    auth: "ELEVATED",
    email: "nomail@pasco.ca",
    password: "test",
    auth_level: 2,
  },
  {
    _id: uuidv4(),
    first_name: "Dan",
    last_name: "Brown",
    location: LocationData[1],
    auth: "ADMIN",
    email: "nomail@pasco.ca",
    password: "test",
    auth_level: 3,
  },
  {
    _id: uuidv4(),
    first_name: "Dave",
    last_name: "Best",
    location: LocationData[2],
    auth: "ADMIN",
    email: "nomail@pasco.ca",
    password: "test",
    auth_level: 3,
  },
  {
    _id: uuidv4(),
    first_name: "Edward",
    last_name: "Wiggles",
    location: LocationData[3],
    auth: "ADMIN",
    email: "nomail@pasco.ca",
    password: "test",
    auth_level: 3,
  },
];

export const EquipmentData: EquipmentInterface[] = [
  {
    _id: uuidv4(),
    name: "GPU",
  },
  {
    _id: uuidv4(),
    name: "Golf Cart",
  },
  {
    _id: uuidv4(),
    name: "Type 4 De-icer",
  },
  {
    _id: uuidv4(),
    name: "Type 1 De-icer",
  },
];

export const EquipmentInstanceData: EquipmentInstanceInterface[] = [
  {
    _id: uuidv4(),
    equipment_type: EquipmentData[0],
    location: LocationData[0],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida. Donec scelerisque ut enim eu vestibulum. Etiam gravida pellentesque tellus vitae finibus. Donec euismod lacinia tortor, a imperdiet ex lacinia nec. Nunc cursus dapibus lectus ut condimentum. Quisque dictum quis quam vitae rhoncus. Curabitur arcu odio, sodales ut velit vitae, convallis sagittis tellus. Maecenas pulvinar leo sed urna mollis condimentum. Ut commodo, urna a consectetur tempor, purus elit viverra tellus, eget pulvinar mi sapien in augue.",
    serial_number: "",
    model_number: "VD4-8S22",
    status: "BEING_REPAIRED",
  },
  {
    _id: uuidv4(),
    equipment_type: EquipmentData[0],
    location: LocationData[1],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida. Donec scelerisque ut enim eu vestibulum. Etiam gravida pellentesque tellus vitae finibus. Donec euismod lacinia tortor, a imperdiet ex lacinia nec. Nunc cursus dapibus lectus ut condimentum. Quisque dictum quis quam vitae rhoncus. Curabitur arcu odio, sodales ut velit vitae, convallis sagittis tellus. Maecenas pulvinar leo sed urna mollis condimentum. Ut commodo, urna a consectetur tempor, purus elit viverra tellus, eget pulvinar mi sapien in augue.",
    serial_number: "",
    model_number: "BA4-8G22",
    status: "OPERABLE",
  },
  {
    _id: uuidv4(),
    equipment_type: EquipmentData[1],
    location: LocationData[0],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida. Donec scelerisque ut enim eu vestibulum. Etiam gravida pellentesque tellus vitae finibus. Donec euismod lacinia tortor, a imperdiet ex lacinia nec. Nunc cursus dapibus lectus ut condimentum. Quisque dictum quis quam vitae rhoncus. Curabitur arcu odio, sodales ut velit vitae, convallis sagittis tellus. Maecenas pulvinar leo sed urna mollis condimentum. Ut commodo, urna a consectetur tempor, purus elit viverra tellus, eget pulvinar mi sapien in augue.",
    serial_number: "",
    model_number: "VD22-8S672",
    status: "OPERABLE",
  },
  {
    _id: uuidv4(),
    equipment_type: EquipmentData[3],
    location: LocationData[3],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida. Donec scelerisque ut enim eu vestibulum. Etiam gravida pellentesque tellus vitae finibus. Donec euismod lacinia tortor, a imperdiet ex lacinia nec. Nunc cursus dapibus lectus ut condimentum. Quisque dictum quis quam vitae rhoncus. Curabitur arcu odio, sodales ut velit vitae, convallis sagittis tellus. Maecenas pulvinar leo sed urna mollis condimentum. Ut commodo, urna a consectetur tempor, purus elit viverra tellus, eget pulvinar mi sapien in augue.",
    serial_number: "",
    model_number: "VE4-8FF22",
    status: "INOPERABLE",
  },
  {
    _id: uuidv4(),
    equipment_type: EquipmentData[2],
    location: LocationData[1],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida. Donec scelerisque ut enim eu vestibulum. Etiam gravida pellentesque tellus vitae finibus. Donec euismod lacinia tortor, a imperdiet ex lacinia nec. Nunc cursus dapibus lectus ut condimentum. Quisque dictum quis quam vitae rhoncus. Curabitur arcu odio, sodales ut velit vitae, convallis sagittis tellus. Maecenas pulvinar leo sed urna mollis condimentum. Ut commodo, urna a consectetur tempor, purus elit viverra tellus, eget pulvinar mi sapien in augue.",
    serial_number: "",
    model_number: "VD6888-BG-8S22",
    status: "DAMAGED",
  },
  {
    _id: uuidv4(),
    equipment_type: EquipmentData[1],
    location: LocationData[2],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida. Donec scelerisque ut enim eu vestibulum. Etiam gravida pellentesque tellus vitae finibus. Donec euismod lacinia tortor, a imperdiet ex lacinia nec. Nunc cursus dapibus lectus ut condimentum. Quisque dictum quis quam vitae rhoncus. Curabitur arcu odio, sodales ut velit vitae, convallis sagittis tellus. Maecenas pulvinar leo sed urna mollis condimentum. Ut commodo, urna a consectetur tempor, purus elit viverra tellus, eget pulvinar mi sapien in augue.",
    serial_number: "",
    model_number: "VD4FFF-8S22EEEE",
    status: "OUT_OF_SERVICE",
  },
];

export const ServiceData: ServiceInterface[] = [
  {
    name: "oil change",
    type: "MAINTAIN",
    frequency: "DAILY",
    interval: 180,
    _id: uuidv4(),
  },
  {
    name: "winterize",
    type: "MAINTAIN",
    frequency: "ANNUALLY",
    interval: 320,
    _id: uuidv4(),
  },
  {
    name: "checkup",
    type: "MAINTAIN",
    frequency: "MONTHLY",
    interval: 6,
    _id: uuidv4(),
  },
  {
    name: "audit base gse reports",
    type: "MAINTAIN",
    frequency: "MONTHLY",
    interval: 20,
    _id: uuidv4(),
  },
  {
    name: "belt repair",
    type: "REPAIR",
    frequency: "ONCE",
    interval: 0,
    _id: uuidv4(),
  },
  {
    name: "inspection",
    type: "MAINTAIN",
    frequency: "ANNUALLY",
    interval: 200,
    _id: uuidv4(),
  },
  {
    name: "transport",
    type: "OTHER",
    frequency: "ONCE",
    interval: 0,
    _id: uuidv4(),
  },
];

export const ServiceSchedule: ServiceScheduleInterface[] = [
  {
    service: ServiceData[4],
    created_by: UserData[3],
    creation_date: new Date(),
    equipment: EquipmentInstanceData[0],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida.",

    start_date: addMonths(new Date(), -10),
    completion_date: addMonths(new Date(), 1),
    _id: uuidv4(),
  },
  {
    service: ServiceData[0],
    created_by: UserData[0],
    creation_date: new Date(),
    equipment: EquipmentInstanceData[0],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida.",

    start_date: addMonths(new Date(), -10),
    completion_date: addMonths(new Date(), 1),
    _id: uuidv4(),
  },
  {
    service: ServiceData[5],
    created_by: UserData[1],
    creation_date: new Date(),
    equipment: EquipmentInstanceData[1],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida.",

    start_date: addMonths(new Date(), -20),
    completion_date: addMonths(new Date(), 4),
    _id: uuidv4(),
  },
  {
    service: ServiceData[3],
    created_by: UserData[2],
    creation_date: new Date(),
    equipment: EquipmentInstanceData[2],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida.",

    start_date: addMonths(new Date(), -10),
    completion_date: new Date(2023, 12, 10),
    _id: uuidv4(),
  },
  {
    service: ServiceData[2],
    created_by: UserData[3],
    creation_date: new Date(),
    equipment: EquipmentInstanceData[3],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida.",

    start_date: addMonths(new Date(), -30),
    completion_date: new Date(2099, 12, 15),
    _id: uuidv4(),
  },
  {
    service: ServiceData[1],
    created_by: UserData[1],
    creation_date: new Date(),
    equipment: EquipmentInstanceData[4],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida.",

    start_date: addMonths(new Date(), -15),
    completion_date: new Date(2099, 12, 15),
    _id: uuidv4(),
  },
  {
    service: ServiceData[4],
    created_by: UserData[2],
    creation_date: new Date(),
    equipment: EquipmentInstanceData[5],
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex leo, pulvinar quis lorem et, facilisis tristique sapien. Mauris fermentum turpis pretium ligula eleifend luctus. Fusce lacinia aliquet ex rhoncus faucibus. Suspendisse egestas eget massa in gravida.",
    start_date: addMonths(new Date(), 1),
    completion_date: new Date(2099, 12, 15),
    _id: uuidv4(),
  },
];
