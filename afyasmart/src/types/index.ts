export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  actions?: {
    label: string;
    action: () => void;
  }[];
}

export enum AppView {
  Welcome = 'welcome',
  HealthProfile = 'health-profile',
  Chat = 'chat'
}

export interface HealthProfile {
  age: number;
  sex: 'male' | 'female' | 'other' | 'prefer-not-say';
  height: {
    value: number;
    unit: 'cm' | 'ft';
  };
  weight: {
    value: number;
    unit: 'kg' | 'lbs';
  };
  helpType: string;
}
