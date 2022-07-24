import { AlertColor } from "@mui/material/Alert/Alert";

export interface Item {
  label: string;
  value: string;
}
export interface UIItem {
  img?: string;
  title: string;
  description: string;
}
export interface Alert {
  open: boolean;
  text: string;
  status: AlertColor;
}
