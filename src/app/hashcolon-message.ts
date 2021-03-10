export enum HashColonMessageType {
    error, return,
    req_filelist, req_dirlist, req_geojson,
    bash
}

export class HashColonMessage {
    messageType: HashColonMessageType;
    messageKey: string;
    messageContent: any;
}