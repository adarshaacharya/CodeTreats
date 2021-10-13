export const SOCKETS_EVENT = `socket.event`;

export const SOCKETS_EVENT_CONNECTED = `connect`;
export const SOCKETS_EVENT_DISCONNECTED = `disconnect`;
export const SOCKETS_EVENT_CONNECTION_ERROR = `${SOCKETS_EVENT}.connection.error`;

export const SOCKETS_EVENT_USER_JOINED = `${SOCKETS_EVENT}.join.room`;
export const SOCKETS_EVENT_USER_LEFT = `${SOCKETS_EVENT}.leave.room`;

export const SOCKETS_EVENT_CREATE_ROOM = `${SOCKETS_EVENT}.create.room`;
export const SOCKETS_EVENT_UPDATE_ROOM = `${SOCKETS_EVENT}.update.room`;

export const SOCKETS_EVENT_REALTIME_LANGUAGE = `${SOCKETS_EVENT}.realtime.lang`;
export const SOCKETS_EVENT_REALTIME_CODE = `${SOCKETS_EVENT}.realtime.code`;
export const SOCKETS_EVENT_REALTIME_INPUT = `${SOCKETS_EVENT}.realtime.input`;
export const SOCKETS_EVENTS_REALTIME_OUTPUT = `${SOCKETS_EVENT}.realtime.output`;
export const SOCKETS_EVENTS_REALTIME_RUN = `${SOCKETS_EVENT}.realtime.run`;
export const SOCKETS_EVENTS_REALTIME_MESSAGE = `${SOCKETS_EVENT}.realtime.message`;
export const SOCKETS_EVENTS_REALTIME_LOADING = `${SOCKETS_EVENT}.realtime.loading`;

export const SOCKETS_EVENT_UPDATE_LANGUAGE = `${SOCKETS_EVENT}.update.lang`;
export const SOCKETS_EVENT_UPDATE_CODE = `${SOCKETS_EVENT}.update.code`;
export const SOCKETS_EVENT_UPDATE_INPUT = `${SOCKETS_EVENT}.update.input`;
export const SOCKETS_EVENTS_UPDATE_OUTPUT = `${SOCKETS_EVENT}.update.output`;
export const SOCKETS_EVENTS_UPDATE_LOADING = `${SOCKETS_EVENT}.update.loading`;
export const SOCKETS_EVENT_UPDATE_MESSAGE = `${SOCKETS_EVENT}.update.message`;
