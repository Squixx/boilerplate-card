import { ActionConfig } from 'custom-card-helpers';

// TODO Add your configuration elements here for type-checking
export interface NsCardConfig {
  type: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entity?: string;
  entities?: string[];
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface NsSensorEntity {
  going?: boolean;
  departure_time_planned?: string;
  departure_time_actual?: string;
  departure_delay?: boolean;
  departure_platform_planned?: string;
  departure_platform_actual?: string;
  arrival_time_planned?: string;
  arrival_time_actual?: string;
  arrival_delay?: boolean;
  arrival_platform_planned?: string;
  arrival_platform_actual?: string;
  next?: string;
  status?: string;
  transfers?: string;
  route?: string[];
  remarks?: null;
  attribution?: string;
  friendly_name?: string;
  icon?: string;
}
