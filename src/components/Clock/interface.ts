export interface LocationClockProps {
  registryDate?: Date;
  adjustmentInfo?: {
    previousHour?: string;
    registryType?: string;
  };
}
