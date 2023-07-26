export interface LocationInterface {
  _id: string;
  name: string;
  city: string;
}
//Service
export interface ServiceInterface {
  _id: string;
  name: string;
  type: "MAINTAIN" | "REPAIR" | "OTHER";
  frequency: "ONCE" | "DAILY" | "WEEKLY" | "MONTHLY" | "ANNUALLY";
  interval: number;
}

export interface ServiceScheduleInterface {
  service: ServiceInterface;
  created_by: UserInterface;
  creation_date: Date;
  cost?: number;
  equipment: EquipmentInstanceInterface;
  notes?: string;
  start_date: Date;
  completion_date: Date;
  _id: string;
}
//completion date of Dec 15 2099 means no end date

export interface ServiceEventExceptionInterface {
  service_schedule: ServiceScheduleInterface;
  exception_date: Date;
  is_cancelled: boolean;
  is_rescheduled: boolean;
  created_by: UserInterface;
  status: "COMPLETE" | "IN_PROGRESS" | "NOT_STARTED";
  notes: string;
  _id: string;
}
// Equipment

export interface EquipmentInterface {
  name: string;
  _id: string;
}

//Equipment instance
export interface EquipmentInstanceInterface {
  _id: string;
  equipment_type: EquipmentInterface;
  location: LocationInterface;
  notes?: string;
  serial_number?: string;
  model_number?: string;
  purchase_date?: Date;
  lifespan?: Date;
  status:
    | "OPERABLE"
    | "INOPERABLE"
    | "DAMAGED"
    | "OUT_OF_SERVICE"
    | "BEING_REPAIRED";
}

export interface UserInterface {
  first_name: string;
  last_name: string;
  location?: LocationInterface;
  auth: "ADMIN" | "ELEVATED" | "USER";
  email: string;
  password: string;
  auth_level: number;
  _id: string;
}

export interface LocalStorageServiceScheduleInterface {
  service: ServiceInterface;
  created_by: UserInterface;
  creation_date: string;
  equipment: EquipmentInstanceInterface;
  notes?: string;
  start_date: string;
  completion_date: string;
  _id: string;
}
