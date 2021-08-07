/**
 * sockets name
 */
export const SOCKETS_EVENT = 'socket:event';

/**
 * sockets event: user joined
 */
// export const SOCKETS_EVENT_USER_JOINED = `${SOCKETS_EVENT}.user.joined`;

/**
 * sockets event: user left
 */
//  export const SOCKETS_EVENT_USER_LEFT = `${SOCKETS_EVENT}.user.left`;

//  export const SOCKETS_EVENT_CONNECTED = `${SOCKETS_EVENT}.connected`;
//  export const SOCKETS_EVENT_DISCONNECTED = `${SOCKETS_EVENT}.disconnected`;
//  export const SOCKETS_EVENT_CONNECTION_ERROR = `${SOCKETS_EVENT}.connection.error`;

export const SOCKETS_EVENT_CONNECTED = `connection`;
export const SOCKETS_EVENT_DISCONNECTED = 'disconnect';

export const SOCKETS_EVENT_USER_JOINED = 'join:room';
export const SOCKETS_EVENT_USER_LEFT = 'leave:room';

export const SOCKETS_EVENT_CREATE_ROOM = 'create:room';
export const SOCKETS_EVENT_UPDATE_ROOM = 'update:room';

export const SOCKETS_EVENT_REALTIME_LANGUAGE = 'realtime:lang';
export const SOCKETS_EVENT_REALTIME_CODE = 'realtime:code';
export const SOCKETS_EVENT_REALTIME_INPUT = 'realtime:input';
export const SOCKETS_EVENTS_REALTIME_OUTPUT = 'realtime:output';
export const SOCKETS_EVENTS_REALTIME_RUN = 'realtime:run';
export const SOCKETS_EVENTS_REALTIME_MESSAGE = 'realtime:message';
export const SOCKETS_EVENTS_REALTIME_LOADING = 'realtime:loading';

export const SOCKETS_EVENT_UPDATE_LANGUAGE = 'update:lang';
export const SOCKETS_EVENT_UPDATE_CODE = 'update:code';
export const SOCKETS_EVENT_UPDATE_INPUT = 'update:input';
export const SOCKETS_EVENTS_UPDATE_OUTPUT = 'update:output';
export const SOCKETS_EVENTS_UPDATE_LOADING = 'update:loading';
export const SOCKETS_EVENT_UPDATE_MESSAGE = 'update:message';
