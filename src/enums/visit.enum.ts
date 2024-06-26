export enum VisitTypeEnum {
  QR = 'QR',
  PREAUTHORIZED = 'PREAUTORIZADO',
}

export enum VisitStatusEnum {
  PENDING = 'PENDIENTE',      // Initial State
  FULFILLED = 'COMPLETADA',   // Sensor
  CANCELLED = 'CANCELADA',    // Resident
  IN_PROGRESS = 'EN CURSO',   // Sensor
}
