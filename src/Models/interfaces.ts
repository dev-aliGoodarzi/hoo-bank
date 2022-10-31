export interface I_HeaderLinks {
  nameForDisplay: string;
  routeToNavigate: string;
}

export interface I_status {
  name: string;
  value: string;
  hasAfterRow: boolean;
}

export interface I_advantageCards {
  Icon: any;
  name: string;
  content: string;
}

export interface I_transAction {
  name: string;
  timeAgo: string;
  value: string;
  icon: any;
  goodOrBad: "good" | "bad";
  imgBg: "white" | "red";
}

export interface I_IconsArray {
  iconId: string;
  src: any;
}
