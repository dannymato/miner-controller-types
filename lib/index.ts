export interface Status {
  status: string;
  requestTime: number;
  statusCode: number;
  // Maybe don't need this
  messageType: string;
  minerDescription: string;
}

export interface Summary {
  elapsedTime: number;
  blocksFound: number;
  averageHashRate: number;
  last30HashRate: number;
  acceptedShares: number;
  rejectedShares: number;
  hardwareErrors: number;
}

export interface GPU {
  id: number;
  enabled: boolean;
  temperature: number;
  fanSpeed: number;
  fanPercent: number;
  gpuClock: number;
  memoryClock: number;
  gpuVoltage: number;
  gpuActivity: number;
  averageHashRate: number;
  last30sHashRate: number;
  acceptedShares: number;
  rejectedShares: number;
  hardwareErrors: number;
  uptime: number;
}

export interface MinerReturn<ItemType extends Summary | GPU> {
  status: Status;
  data: ItemType;
}
