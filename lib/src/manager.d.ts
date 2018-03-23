import ScalpsCoreRestApi = require("matchmore_alps_core_rest_api");
import { MatchMonitorMode } from "./matchmonitor";
import * as models from "./model/models";
import { IPersistenceManager } from "./persistence";
export interface Token {
    sub: string;
}
export declare class Manager {
    apiKey: string;
    apiUrlOverride: string;
    defaultClient: ScalpsCoreRestApi.ApiClient;
    private _matchMonitor;
    private _locationManager;
    private _persistenceManager;
    token: Token;
    constructor(apiKey: string, apiUrlOverride?: string, persistenceManager?: IPersistenceManager);
    init(): void;
    readonly defaultDevice: models.Device;
    readonly devices: models.Device[];
    readonly publications: models.Publication[];
    readonly subscriptions: models.Subscription[];
    createMobileDevice(name: string, platform: string, deviceToken: string, completion?: (device: models.MobileDevice) => void): Promise<models.MobileDevice>;
    createPinDevice(name: string, location: models.Location, completion?: (device: models.PinDevice) => void): Promise<models.PinDevice>;
    createIBeaconDevice(name: string, proximityUUID: string, major: number, minor: number, location: models.Location, completion?: (device: models.IBeaconDevice) => void): Promise<models.IBeaconDevice>;
    createAnyDevice<T extends models.Device>(device: models.Device, completion?: (device: T) => void): Promise<T>;
    private setDeviceType(device);
    private isMobileDevice(device);
    private isPinDevice(device);
    private isBeaconDevice(device);
    createPublication(topic: string, range: number, duration: number, properties: Object, deviceId?: string, completion?: (publication: models.Publication) => void): Promise<models.Publication>;
    createSubscription(topic: string, range: number, duration: number, selector?: string, deviceId?: string, completion?: (subscription: models.Subscription) => void): Promise<models.Subscription>;
    updateLocation(location: models.Location, deviceId?: string, completion?: (location: void) => void): Promise<void>;
    getAllMatches(deviceId?: string, completion?: (matches: models.Match[]) => void): Promise<models.Match[]>;
    getMatch(matchId: any, string: any, deviceId?: string, completion?: (matches: models.Match) => void): Promise<models.Match>;
    getAllPublications(deviceId?: string, completion?: (publications: models.Publication[]) => void): Promise<{}>;
    getAllSubscriptions(deviceId?: string, completion?: (subscriptions: models.Subscription[]) => void): Promise<{}>;
    onMatch(completion: (match: models.Match) => void): void;
    onLocationUpdate(completion: (location: models.Location) => void): void;
    startMonitoringMatches(mode: MatchMonitorMode): void;
    stopMonitoringMatches(): void;
    startUpdatingLocation(): void;
    stopUpdatingLocation(): void;
}
