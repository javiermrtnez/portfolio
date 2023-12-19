export interface Experience {
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  icon: string;
  technologies?: string[];
}
