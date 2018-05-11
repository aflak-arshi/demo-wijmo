export interface ListItem {
  name: string;
  id: string;
  icon?: string;
  state?: string;
  stateColor?: string;
  tooltip?: string;
}

export interface ListData {
  title: string;
  hasHeader: boolean;
  allowSearch: boolean;
  headerActions?: Array<ActionData>;
  data: Array<ListItem>;
  hasTooltip?: boolean;
  hasMetadata?: boolean;
  hasContextMenus?: boolean;
  actions?: Array<ActionData>;
  statusIcon?: Array<StatusIcon>;
}

export interface ActionData {
  name: string;
  tooltip: string;
  icon: string;
  command: Function;
}

export interface StatusIcon {
  name: string;
  required: boolean;
  title: string;
  icon: string;
}
